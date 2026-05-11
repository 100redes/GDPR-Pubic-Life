# 🌍 100redes.eu

### *Soberania Digital para a Sociedade Civil*  
### *Digital Sovereignty for Civil Society*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![RGPD Compliant](https://img.shields.io/badge/RGPD-Compliant-green.svg)](100redes/legal.html)
[![Zero Tracking](https://img.shields.io/badge/Tracking-Zero-success.svg)](100redes/about.html)
[![Open Source](https://img.shields.io/badge/Open-Source-orange.svg)](https://github.com/100redes/GDPR-Public-Life)
[![Netlify Ready](https://img.shields.io/badge/Netlify-Ready-00C7B7.svg)](netlify.toml)

---

## 🚀 Version 2.0 - Mai 2026

| Fonctionnalité | Description |
|----------------|-------------|
| 📅 **Événements** | 158+ événements culturels chargés depuis GitHub |
| 📡 **Ajout Source** | Formulaire multilingue (6 langues) |
| 🔒 **API Sécurisée** | Netlify Functions + GitHub Issues |
| 🌐 **100% Statique** | Aucun serveur backend requis |

---

## � Notre Mission

**Imaginez un Internet où vous n'êtes pas le produit.**

Dans un monde où chaque clic est tracé, chaque mouvement analysé, et chaque donnée monétisée, **100redes.eu** propose une alternative radicale : une plateforme culturelle qui respecte **vraiment** votre vie privée.

### 🔥 Le Problème

- **2 milliards d'euros** d'amendes RGPD infligées aux géants du web ([source](https://www.enforcementtracker.com/))
- **96% des sites web** utilisent des cookies de tracking
- **Vos données personnelles** sont vendues sans votre consentement réel
- **La surveillance de masse** est devenue la norme

### ✨ Notre Solution

**100redes.eu** est une plateforme d'événements culturels qui prouve qu'on peut créer des services web utiles **sans sacrifier votre vie privée**.

#### Zéro Compromis
- ❌ **Zéro cookie**
- ❌ **Zéro tracking**
- ❌ **Zéro collecte de données**
- ❌ **Zéro service tiers**
- ✅ **100% respect de votre vie privée**

---

## ✨ Caractéristiques | Features

### 🔒 Zero Tracking
- ❌ Pas de cookies
- ❌ Pas de localStorage/sessionStorage
- ❌ Pas de Google Analytics
- ❌ Pas de Facebook Pixel
- ❌ Pas de services tiers
- ✅ **100% respect de votre vie privée**

### 🌐 Multilingue | Multilingual
Support de 6 langues européennes :
- 🇵🇹 Portugais (PT)
- 🇬🇧 Anglais (EN)
- 🇫🇷 Français (FR)
- 🇪🇸 Espagnol (ES)
- 🇩🇪 Allemand (DE)
- 🇮🇹 Italien (IT)

### ⚖️ Conformité RGPD | GDPR Compliant
- Aucune collecte de données personnelles
- Aucun consentement requis (car aucune donnée collectée)
- Transparence totale
- Code source ouvert et auditable

### 🌍 Open Source
- Licence MIT (permissive)
- Code 100% transparent
- Aucune dépendance externe
- Auditable par tous

---

## 🛠️ Technologies

### Stack Technique
```
├── HTML5 (natif)
├── CSS3 (natif, inline)
├── JavaScript ES6+ (vanilla, pas de framework)
└── SVG (inline pour logo et favicon)
```

### Aucune Librairie Externe
- ❌ Pas de React, Vue, Angular
- ❌ Pas de jQuery
- ❌ Pas de Bootstrap, Tailwind
- ❌ Pas de CDN
- ❌ Pas de Google Fonts
- ✅ **100% vanilla JavaScript et CSS**

**Pourquoi ?**
- 🚀 Performance maximale
- 🔒 Sécurité optimale (pas de vulnérabilités tierces)
- 🎯 Contrôle total du code
- 🌐 Pas de tracking caché dans des CDN

---

## 📦 Installation

### Prérequis
Aucun ! C'est un site statique.

### Déploiement Local

```bash
# Cloner le repository
git clone https://github.com/votre-username/100redes.eu.git

# Aller dans le dossier
cd 100redes.eu

# Ouvrir avec un serveur local (exemple avec Python)
python3 -m http.server 8000

# Ou avec Node.js
npx http-server

# Ou simplement ouvrir index.html dans votre navigateur
```

### Déploiement Production

Le site peut être déployé sur n'importe quel hébergeur de fichiers statiques :

- **Netlify** : Drag & drop du dossier (recommandé)
- **Vercel** : `vercel --prod`
- **GitHub Pages** : Push vers branche `gh-pages`
- **Serveur Apache/Nginx** : Copier les fichiers dans `/var/www/html/`

### 🔧 Configuration Netlify (recommandé)

1. **Connecter le repo** sur [Netlify](https://app.netlify.com)
2. **Configurer les variables d'environnement** :
   ```
   GITHUB_TOKEN = ghp_xxxxxxxxxxxx
   ```
   > Le token doit avoir les permissions `repo` pour créer des Issues

3. **Déployer** - Netlify utilisera automatiquement `netlify.toml`

#### Fonctionnement des soumissions
```
Utilisateur → Formulaire → /api/add-source → GitHub Issue créée
                                           ↓
                              Modération manuelle → Ajout au scraper
```

---

## 📁 Structure du Projet

```
GDPR-Public-Life/
├── 100redes/
│   ├── index.html          # Page d'accueil
│   ├── events.html         # 📅 Page événements (données GitHub)
│   ├── add-source.html     # 📡 Formulaire ajout source (multilingue)
│   ├── about.html          # Page "À propos" multilingue
│   ├── legal.html          # Mentions légales et politique de confidentialité
│   ├── favicon.svg         # Favicon du site
│   └── LICENSE             # Licence MIT
├── netlify/
│   └── functions/
│       └── add-source.js   # 🔒 API serverless (soumissions sécurisées)
├── netlify.toml            # Configuration Netlify
└── readme.md               # Ce fichier
```

### 🆕 Nouvelles Fonctionnalités

#### 📅 Page Événements (`events.html`)
- Charge **158+ événements** depuis [GitHub events100redes](https://github.com/PapooLePapoo/events100redes)
- Filtres par ville, catégorie, date, prix
- Affichage en grille responsive
- Modale de détail sans redirection externe

#### 📡 Formulaire Ajout Source (`add-source.html`)
- **6 langues** : FR, EN, PT, ES, DE, IT
- Détection automatique de la langue du navigateur
- Validation URL côté client et serveur
- Soumissions créent des **Issues GitHub** pour modération

#### 🔒 API Serverless (Netlify Functions)
- Validation et sanitization des entrées
- Stockage sécurisé via GitHub Issues
- Token GitHub en variable d'environnement (jamais exposé)

---

## 🎨 Personnalisation

### Modifier les Couleurs

Les couleurs principales sont définies dans les balises `<style>` de chaque page HTML :

```css
/* Couleur principale */
#1465ff  /* Bleu */

/* Couleur secondaire */
#18207d  /* Bleu foncé */

/* Couleur de fond */
#fff     /* Blanc */
```

### Ajouter une Langue

1. Ouvrir `index.html` ou `about.html`
2. Trouver l'objet `translations`
3. Ajouter une nouvelle langue :

```javascript
const translations = {
    // ... langues existantes
    nl: {  // Néerlandais
        mainTitle: "Culturele Evenementen",
        subtitle: "Vrije toegang tot cultuur",
        // ... autres traductions
    }
};
```

4. Ajouter un bouton de langue dans le footer :

```html
<button class="lang-btn" data-lang="nl">NL</button>
```

---

## 🔐 Sécurité et Confidentialité

### Audit de Sécurité

Un audit technique complet est disponible dans [`TECHNICAL_AUDIT.md`](TECHNICAL_AUDIT.md).

### Conformité RGPD

- ✅ **Aucune donnée personnelle collectée**
- ✅ **Aucun cookie**
- ✅ **Aucun stockage persistant**
- ✅ **Aucun service tiers**
- ✅ **Code source ouvert et auditable**

Voir [`legal.html`](legal.html) pour la politique de confidentialité complète.

### Vérifier par Vous-Même

```bash
# Rechercher tous les cookies
grep -r "cookie" *.html

# Rechercher localStorage/sessionStorage
grep -r "localStorage\|sessionStorage" *.html

# Rechercher services tiers
grep -r "google\|facebook\|analytics" *.html
```

**Résultat attendu :** Aucune occurrence (sauf dans les commentaires ou textes explicatifs).

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

### 1. Fork le Projet
```bash
git clone https://github.com/votre-username/100redes.eu.git
```

### 2. Créer une Branche
```bash
git checkout -b feature/amelioration-incroyable
```

### 3. Commit vos Changements
```bash
git commit -m "Ajout d'une fonctionnalité incroyable"
```

### 4. Push vers la Branche
```bash
git push origin feature/amelioration-incroyable
```

### 5. Ouvrir une Pull Request

### Règles de Contribution

- ❌ **Pas de librairies externes** (sauf justification exceptionnelle)
- ❌ **Pas de tracking ou cookies**
- ❌ **Pas de services tiers**
- ✅ **Code vanilla JavaScript/CSS uniquement**
- ✅ **Respecter la philosophie "zero tracking"**
- ✅ **Tester sur plusieurs navigateurs**
- ✅ **Maintenir l'accessibilité**

---

## 📜 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

### En Résumé

✅ **Utilisation commerciale**  
✅ **Modification**  
✅ **Distribution**  
✅ **Usage privé**  
⚠️ **Aucune garantie**

---

## 🌟 Philosophie

### Nos Principes

1. **🔒 Vie privée d'abord**
   - Aucune collecte de données
   - Aucun tracking
   - Aucun cookie

2. **🌍 Open Source et Transparent**
   - Code source public
   - Auditable par tous
   - Licence permissive

3. **⚖️ Conformité RGPD**
   - Respect strict des lois européennes
   - Pas de consentement nécessaire (car aucune donnée)
   - Transparence totale

4. **🌐 Accessibilité Universelle**
   - Multilingue (6 langues)
   - Design responsive
   - Performance optimale

5. **🛡️ Souveraineté Digitale**
   - Indépendance des Big Tech
   - Pas de dépendances externes
   - Contrôle total

---

## 📊 Statistiques

- **Lignes de code :** ~1700 (HTML + CSS + JS)
- **Librairies externes :** 0
- **Cookies :** 0
- **Tracking :** 0
- **Données collectées :** 0
- **Taille totale :** < 500 KB
- **Temps de chargement :** < 1 seconde

---

## 🔗 Liens Utiles

- **Site web :** [https://100redes.eu](https://100redes.eu)
- **À propos :** [about.html](about.html)
- **Mentions légales :** [legal.html](legal.html)
- **Licence :** [LICENSE](LICENSE)
- **Audit technique :** [TECHNICAL_AUDIT.md](TECHNICAL_AUDIT.md)

### Organisations Inspirantes

- [noyb - None of Your Business](https://noyb.eu/) - Protection des données
- [Free IT Foundation](https://freeit.world/) - Souveraineté digitale
- [FSFE](https://fsfe.org/) - Free Software Foundation Europe
- [Internet Society](https://www.internetsociety.org/) - Gouvernance Internet
- [Wikimedia](https://www.wikimedia.org/) - Connaissance libre

---

## 📞 Contact

Pour toute question, suggestion ou signalement :

- **Email :** [À compléter]
- **Issues GitHub :** [À compléter avec lien repo]

---

## 🙏 Remerciements

Merci à tous ceux qui croient en un Internet plus juste, plus libre et plus respectueux des droits humains.

**Ensemble, nous pouvons construire une alternative aux modèles de surveillance et d'exploitation des données.**

---

<p align="center">
  <strong>100redes.eu</strong><br>
  Soberania Digital para a Sociedade Civil<br>
  <br>
  © 2026 | Licence MIT | Zero Tracking | RGPD Compliant
</p>
