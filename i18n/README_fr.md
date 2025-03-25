# Techghil Mauritanie

<p align="center">
  <a href="https://techghil.mr/">
    <img src="../static/logo-techghil.png" alt="Logo Techghil" width="200">
  </a>
</p>

<p align="center">
  <a href="https://kit.svelte.dev/">
    <img src="https://img.shields.io/badge/SvelteKit-1.0-orange" alt="SvelteKit">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-4.0-blue" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/TailwindCSS-2.0-blue" alt="TailwindCSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  </a>
</p>

<h4 align="center">
    <p>
        <a href="../README.md">English</a> |
        <b>Français</b> |
        <a href="README_ar.md">العربية</a>
    </p>
</h4>

Techghil Mauritanie est une application SvelteKit conçue pour fournir des statistiques officielles sur l'emploi en Mauritanie. Le projet visualise les données à l'aide de divers graphiques et cartes pour offrir des informations sur les tendances de l'emploi.

## Table des Matières

1. [Aperçu du Projet](#1-aperçu-du-projet)
2. [Commencer](#2-commencer)
3. [Construire le Projet](#3-construire-le-projet)
4. [Structure des Données](#4-structure-des-données)
5. [Créer des Visualisations](#5-créer-des-visualisations)
6. [Exemple de Jeu de Données](#6-exemple-de-jeu-de-données)
7. [Directives de Contribution](#7-directives-de-contribution)
8. [Versionnage](#8-versionnage)
9. [Directives de Message de Commit](#9-directives-de-message-de-commit)
10. [Utilisation de Docker](#10-utilisation-de-docker)
11. [Utilisation de Makefile](#11-utilisation-de-makefile)
12. [Licence](#12-licence)

## 1. Aperçu du Projet

Ce projet vise à présenter des statistiques officielles sur l'emploi en Mauritanie à travers des visualisations interactives. Il utilise SvelteKit pour le frontend, TypeScript pour la sécurité des types et Tailwind CSS pour le style. Les visualisations sont alimentées par des bibliothèques telles que `chart.js` et `maplibre-gl`.

## 2. Commencer

Pour configurer le projet localement, suivez ces étapes :

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/Riminder/opendata.techghil.mr.git
    cd opendata.techghil.mr
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```

4. Ouvrez l'application dans un nouvel onglet du navigateur :
    ```bash
    npm run dev -- --open
    ```

## 3. Construire le Projet

Pour créer une version de production de votre application :

```bash
npm run build
```

Vous pouvez prévisualiser la version de production avec :

```bash
npm run preview
```

> Pour déployer votre application, vous devrez peut-être installer un [adaptateur](https://svelte.dev/docs/kit/adapters) pour votre environnement cible.

## 4. Structure des Données

Les données pour les visualisations sont stockées dans des fichiers JSON. Voici un exemple de structure de données :

```json
{
  "year": 2025,
  "employment": {
    "total": 1000000,
    "sectors": {
      "agriculture": 250000,
      "industry": 300000,
      "services": 450000
    }
  }
}
```

## 5. Créer des Visualisations

Pour créer un graphique à partir des données, suivez ces étapes :

1. Importez les bibliothèques et les données nécessaires :
    ```javascript
    import { Bar } from 'chart.js';
    import data from './data/employment.json';
    ```

2. Préparez les données pour le graphique :
    ```javascript
    const labels = Object.keys(data.employment.sectors);
    const values = Object.values(data.employment.sectors);

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Emploi par Secteur',
        data: values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    };
    ```

3. Créez le graphique :
    ```javascript
    const ctx = document.getElementById('myChart').getContext('2d');
    new Bar(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    ```

## 6. Exemple de Jeu de Données

Voici un exemple de jeu de données anonymisé :

```json
{
  "year": 2025,
  "employment": {
    "total": 1000000,
    "sectors": {
      "agriculture": 250000,
      "industry": 300000,
      "services": 450000
    }
  }
}
```

## 7. Directives de Contribution

Nous accueillons les contributions ! Pour contribuer, suivez ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature-branch`).
3. Apportez vos modifications.
4. Commitez vos modifications (`git commit -m 'Ajouter une nouvelle fonctionnalité'`).
5. Poussez vers la branche (`git push origin feature-branch`).
6. Créez une Pull Request.

Pour toute question ou support, veuillez contacter :

- [xxx@techghil.mr](mailto:xxx@techghil.mr)
- [yyy@techghil.mr](mailto:yyy@techghil.mr)

## 8. Versionnage

Nous utilisons le [Versionnage Sémantique](https://semver.org/) pour le versionnage. Pour les versions disponibles, consultez les [tags sur ce dépôt](https://github.com/yourusername/opendata.techghil.mr/tags).

## 9. Directives de Message de Commit

Nous suivons la spécification [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pour nos messages de commit :

- `feat` : Une nouvelle fonctionnalité
- `fix` : Une correction de bug
- `docs` : Modifications de la documentation uniquement
- `style` : Modifications qui n'affectent pas la signification du code (espaces blancs, formatage, points-virgules manquants, etc.)
- `refactor` : Une modification du code qui ne corrige ni un bug ni n'ajoute une fonctionnalité
- `perf` : Une modification du code qui améliore les performances
- `test` : Ajout de tests manquants ou correction de tests existants
- `chore` : Modifications du processus de build ou des outils auxiliaires et des bibliothèques telles que la génération de documentation

## 10. Utilisation de Docker

Pour construire et exécuter le projet en utilisant Docker :

1. Construisez l'image Docker :
    ```bash
    docker build -t techghil-mauritanie .
    ```

2. Exécutez le conteneur Docker :
    ```bash
    docker run -p 3000:3000 techghil-mauritanie
    ```

## 11. Utilisation de Makefile

Vous pouvez utiliser le Makefile pour simplifier les tâches courantes :

- Installer les dépendances :
    ```bash
    make install
    ```

- Démarrer le serveur de développement :
    ```bash
    make dev
    ```

- Construire le projet :
    ```bash
    make build
    ```

- Construire l'image Docker :
    ```bash
    make docker-build
    ```

- Exécuter le conteneur Docker :
    ```bash
    make docker-run
    ```

## 12. Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.