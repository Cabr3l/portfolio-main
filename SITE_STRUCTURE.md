# Structure du Site Web - Portfolio de Cabrel

## Vue d'ensemble
Ce site web est un portfolio personnel développé avec React et Vite, présentant les compétences, expériences et projets de Cabrel Tiotsop Ngueguim, étudiant en mathématiques appliquées à l'École Polytechnique.

## Arborescence des fichiers

```
portfolio-main/
├── public/                          # Fichiers publics statiques
│   ├── resume.png                   # CV de Cabrel
│   └── favicon.ico                  # Icône du site
├── src/                             # Code source principal
│   ├── assets/                      # Ressources (images, icônes)
│   │   └── tete.png                # Photo de profil
│   ├── components/                  # Composants React
│   │   ├── Home.jsx                # Page d'accueil
│   │   ├── About.jsx               # Section À propos
│   │   ├── Contact.jsx             # Section Contact
│   │   ├── Footer.jsx              # Pied de page
│   │   ├── Navbar.jsx              # Barre de navigation
│   │   ├── Projects.jsx            # Section Projets
│   │   ├── ProjectsPage.jsx        # Page dédiée aux projets
│   │   ├── ProjectDetail.jsx       # Détail d'un projet
│   │   ├── Experiences.jsx         # Section Expériences
│   │   ├── ExperiencesPage.jsx     # Page dédiée aux expériences
│   │   ├── ExperienceDetail.jsx    # Détail d'une expérience
│   │   ├── Service.jsx             # Section Services
│   │   ├── MainPage.jsx            # Page principale
│   │   └── quantguide.py           # Script Python (à vérifier)
│   ├── data/                       # Données centralisées
│   │   ├── personalInfo.js         # Informations personnelles
│   │   └── experiencesData.js      # Données des expériences
│   ├── App.jsx                     # Composant principal de l'application
│   ├── App.css                     # Styles de l'application
│   ├── index.css                   # Styles globaux
│   └── main.jsx                    # Point d'entrée de l'application
├── node_modules/                    # Dépendances npm
├── .git/                           # Répertoire Git
├── .eslintrc.cjs                   # Configuration ESLint
├── .gitignore                      # Fichiers à ignorer par Git
├── index.html                      # Page HTML principale
├── package.json                    # Configuration du projet et dépendances
├── package-lock.json               # Verrouillage des versions des dépendances
├── postcss.config.js               # Configuration PostCSS
├── tailwind.config.js              # Configuration Tailwind CSS
├── vite.config.js                  # Configuration Vite
├── README.md                       # Documentation du projet
├── PROJECTS_STRUCTURE.md           # Structure des projets (existant)
└── SITE_STRUCTURE.md               # Ce fichier
```

## Structure des pages

### 1. Page d'accueil (Home.jsx)
- **Fonction** : Présentation initiale de Cabrel
- **Contenu** : Photo de profil, nom, titre, description courte
- **Boutons** : Contact et CV
- **Navigation** : Lien vers la section contact

### 2. Section À propos (About.jsx)
- **Fonction** : Présentation détaillée de Cabrel
- **Contenu** : Biographie, compétences, formation
- **Style** : Texte descriptif avec mise en forme

### 3. Section Contact (Contact.jsx)
- **Fonction** : Formulaire de contact et informations de contact
- **Contenu** : 
  - Formulaire (nom, email, message)
  - Informations de contact (email, téléphone, adresse)
  - Bouton d'envoi de message
- **Navigation** : ID "contact" pour le scroll

### 4. Section Projets (Projects.jsx)
- **Fonction** : Aperçu des projets principaux
- **Contenu** : Liste des projets avec descriptions courtes
- **Navigation** : Liens vers les pages détaillées des projets

### 5. Page Projets (ProjectsPage.jsx)
- **Fonction** : Page dédiée à tous les projets
- **Contenu** : Liste complète des projets avec filtres
- **Navigation** : Navigation entre projets

### 6. Détail Projet (ProjectDetail.jsx)
- **Fonction** : Page détaillée d'un projet spécifique
- **Contenu** : Description complète, technologies, résultats
- **Navigation** : Retour à la liste des projets

### 7. Section Expériences (Experiences.jsx)
- **Fonction** : Aperçu des expériences professionnelles
- **Contenu** : Liste des expériences avec descriptions courtes
- **Navigation** : Liens vers les pages détaillées

### 8. Page Expériences (ExperiencesPage.jsx)
- **Fonction** : Page dédiée à toutes les expériences
- **Contenu** : Liste complète des expériences
- **Navigation** : Navigation entre expériences

### 9. Détail Expérience (ExperienceDetail.jsx)
- **Fonction** : Page détaillée d'une expérience spécifique
- **Contenu** : Description complète, responsabilités, résultats
- **Navigation** : Retour à la liste des expériences

### 10. Section Services (Service.jsx)
- **Fonction** : Présentation des services offerts
- **Contenu** : Description des compétences et services
- **Style** : Présentation des expertises

### 11. Barre de navigation (Navbar.jsx)
- **Fonction** : Navigation principale du site
- **Contenu** : Menu de navigation, logo, thème sombre/clair
- **Navigation** : Liens vers toutes les sections

### 12. Pied de page (Footer.jsx)
- **Fonction** : Informations de contact et réseaux sociaux
- **Contenu** : 
  - Informations personnelles
  - Formulaire d'inscription newsletter
  - Liens vers réseaux sociaux
  - Liens légaux
- **Réseaux sociaux** : LinkedIn, GitHub, X (Twitter), Telegram

## Structure des données

### 1. personalInfo.js
- **Fonction** : Données centralisées de Cabrel
- **Contenu** : 
  - Informations personnelles
  - Contact
  - Éducation
  - Compétences
  - Technologies
  - Réseaux sociaux
  - Intérêts professionnels

### 2. experiencesData.js
- **Fonction** : Données des expériences professionnelles
- **Contenu** : 
  - Liste des expériences
  - Détails de chaque expérience
  - Dates et descriptions

## Technologies utilisées

- **Frontend** : React.js
- **Build tool** : Vite
- **Styling** : Tailwind CSS
- **Icons** : React Icons (FontAwesome)
- **Linting** : ESLint
- **Versioning** : Git

## Responsive Design

Le site est conçu pour être responsive avec :
- Design mobile-first
- Breakpoints Tailwind CSS
- Flexbox et Grid pour la mise en page
- Classes conditionnelles pour mobile/desktop

## Thème

Le site supporte :
- Mode clair (par défaut)
- Mode sombre (dark mode)
- Transition automatique entre les thèmes
- Persistance du choix de l'utilisateur
