// Netlify Serverless Function - Ajout sécurisé de sources
// Les soumissions sont envoyées comme Issues GitHub pour modération

const GITHUB_REPO = '100redes/GDPR-Public-Life';
const GITHUB_API = 'https://api.github.com';

// Validation URL
function isValidUrl(urlString) {
    try {
        const url = new URL(urlString);
        // Doit être HTTPS
        if (url.protocol !== 'https:') return false;
        // Doit avoir un TLD
        if (!url.hostname.includes('.')) return false;
        // Pas d'adresses locales
        if (['localhost', '127.0.0.1'].includes(url.hostname)) return false;
        if (url.hostname.startsWith('192.168.') || url.hostname.startsWith('10.')) return false;
        return true;
    } catch {
        return false;
    }
}

// Sanitize input
function sanitize(str) {
    return String(str || '')
        .replace(/[<>]/g, '')
        .trim()
        .slice(0, 500);
}

exports.handler = async (event, context) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers, body: '' };
    }

    // Only POST allowed
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse body
        const data = JSON.parse(event.body || '{}');
        const site = sanitize(data.site);
        const lang = sanitize(data.lang) || 'unknown';

        // Validate URL
        if (!site || !isValidUrl(site)) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'URL invalide', code: 'INVALID_URL' })
            };
        }

        // Check for GitHub token
        const githubToken = process.env.GITHUB_TOKEN;
        
        if (!githubToken) {
            // Fallback: log to Netlify (visible in Functions logs)
            console.log('📝 NEW SOURCE SUBMISSION:', {
                site,
                lang,
                date: new Date().toISOString(),
                ip: event.headers['x-forwarded-for'] || 'unknown'
            });
            
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Source enregistrée (mode log)',
                    site 
                })
            };
        }

        // Create GitHub Issue for moderation
        const issueTitle = `🌐 Nouvelle source : ${new URL(site).hostname}`;
        const issueBody = `## Nouvelle source soumise

**URL:** ${site}
**Date:** ${new Date().toISOString()}
**Langue utilisateur:** ${lang}

---

### Actions
- [ ] Vérifier que le site contient des événements
- [ ] Ajouter au scraper si validé
- [ ] Fermer l'issue

---
*Soumis via le formulaire 100redes.eu*`;

        const response = await fetch(`${GITHUB_API}/repos/${GITHUB_REPO}/issues`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${githubToken}`,
                'Accept': 'application/vnd.github+json',
                'Content-Type': 'application/json',
                'X-GitHub-Api-Version': '2022-11-28'
            },
            body: JSON.stringify({
                title: issueTitle,
                body: issueBody,
                labels: ['source-submission', 'needs-review']
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('GitHub API error:', error);
            throw new Error('GitHub API error');
        }

        const issue = await response.json();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Source soumise pour validation',
                site,
                issueNumber: issue.number
            })
        };

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Erreur serveur', code: 'SERVER_ERROR' })
        };
    }
};
