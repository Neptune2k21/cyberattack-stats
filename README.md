# Cyberattack Stats

Une application web pour analyser et visualiser les statistiques de cyberattaques en utilisant une base de données NoSQL.

## 📋 Description

Ce projet fait partie du Semestre 4 - NoSQL à l'IUT Bourgogne. Il s'agit d'une application full-stack permettant de traiter et d'afficher des données de cyberattaques stockées dans MongoDB.

## 🏗️ Architecture

- **Frontend** : Next.js 15 avec TypeScript et Tailwind CSS
- **Base de données** : MongoDB
- **Containerisation** : Docker & Docker Compose

## 📁 Structure du projet

```
cyberattack-stats/
├── frontend/                 # Application Next.js
│   ├── app/                 # Pages et composants App Router
│   ├── public/              # Assets statiques
│   └── package.json         # Dépendances frontend
├── cyberAttack.json         # Données de cyberattaques
├── init-mongo.js            # Script d'initialisation MongoDB
├── docker-compose.yml       # Configuration des services
├── Dockerfile               # Image Docker
└── README.md
```

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 20+)
- Docker et Docker Compose
- npm ou yarn

### Démarrage avec Docker

1. Clonez le projet :
```bash
git clone <url-du-repo>
cd cyberattack-stats
```

2. Lancez l'application avec Docker Compose :
```bash
docker-compose up -d
```

### Démarrage en développement

1. Installez les dépendances du frontend :
```bash
cd frontend
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📊 Données

Le fichier [`cyberAttack.json`](cyberAttack.json) contient les données de cyberattaques qui sont automatiquement importées dans MongoDB via le script [`init-mongo.js`](init-mongo.js).

## 🛠️ Technologies utilisées

### Frontend
- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React 19** - Bibliothèque UI

### Base de données
- **MongoDB** - Base de données NoSQL

### Outils de développement
- **ESLint** - Linting du code
- **PostCSS** - Traitement CSS
- **Docker** - Containerisation

## 📝 Scripts disponibles

Dans le dossier [`frontend/`](frontend/) :

```bash
npm run dev      # Démarrage en développement avec Turbopack
npm run build    # Build de production
npm run start    # Démarrage du serveur de production
npm run lint     # Vérification du code avec ESLint
```

## 🎯 Fonctionnalités

- Visualisation des statistiques de cyberattaques
- Interface responsive avec Tailwind CSS
- Intégration MongoDB pour le stockage des données
- Application containerisée avec Docker

## 👥 Auteurs

Projet réalisé dans le cadre du cours NoSQL - Semestre 4 - IUT Bourgogne  
[Cisse Mamadou](https://github.com/Neptune2k21) (Neptune2k21)  
[Besjan Koraqi](https://github.com/Abstru3) (Abstru3)


## 📄 Licence

Ce projet est à des fins éducatives.
