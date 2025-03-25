# Techghil Mauritanie

<p align="center">
  <a href="https://techghil.mr/">
    <img src="../static/logo-techghil.png" alt="Techghil Logo" width="200">
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
        <a href="./README_ar.md">العربية</a>
    </p>
</h4>

Techghil Mauritanie est une application SvelteKit conçue pour fournir des statistiques officielles sur l'emploi en Mauritanie. Le projet visualise les données à l'aide de divers graphiques et cartes pour offrir des informations sur les tendances de l'emploi.

## Table des matières

1. [Aperçu du projet](#1-apercu-du-projet)
2. [Commencer](#2-commencer)
3. [Construire le projet](#3-construire-le-projet)
4. [Structure des données](#4-structure-des-donnees)
5. [Créer des visualisations](#5-creer-des-visualisations)
6. [Directives de contribution](#6-directives-de-contribution)
7. [Versionnage](#7-versionnage)
8. [Directives de message de commit](#8-directives-de-message-de-commit)
9. [Licence](#9-licence)

## 1. Aperçu du projet

Ce projet vise à présenter les statistiques officielles de l'emploi en Mauritanie à travers des visualisations interactives. Il utilise SvelteKit pour le frontend, TypeScript pour la sécurité des types et Tailwind CSS pour le style. Les visualisations sont alimentées par des bibliothèques telles que `chart.js` et `maplibre-gl`.

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

4. Ouvrez l'application dans un nouvel onglet de navigateur :
    ```bash
    npm run dev -- --open
    ```

## 3. Construire le projet

Pour créer une version de production de votre application :

```bash
npm run build
```

Vous pouvez prévisualiser la version de production avec :

```bash
npm run preview
```

> Pour déployer votre application, vous devrez peut-être installer un [adaptateur](https://svelte.dev/docs/kit/adapters) pour votre environnement cible.

## 4. Structure des données

Les données pour les visualisations sont stockées dans des fichiers JSON. Voici des exemples du format de données attendu pour diverses visualisations :

### 4.1 Tableau d'objets

Ce format est utilisé pour les données qui incluent plusieurs entrées avec des attributs spécifiques.

Fichier : `mock_gpsCoordCandidates.json`

```json
[
  {
    "center": { "lat": 18.079, "lng": -15.965 },
    "num_points": 5
  },
  {
    "center": { "lat": 16.617, "lng": -11.406 },
    "num_points": 3
  }
]
```

### 4.2 Tableau d'objets avec attributs supplémentaires

Ce format est similaire au précédent mais inclut des attributs supplémentaires pour chaque entrée.

Fichier : `mock_gpsCoordOffers.json`

```json
[
  {
    "center": { "lat": 18.079, "lng": -15.965 },
    "num_points": 10,
    "name": "Nouakchott"
  },
  {
    "center": { "lat": 16.617, "lng": -11.406 },
    "num_points": 7,
    "name": "Nouadhibou"
  }
]
```

### 4.3 Paires clé-valeur

Ce format est utilisé pour les données qui associent des clés à des valeurs.

Fichier : `mock_regionCount.json`

```json
{
  "Nouakchott": 500,
  "Nouadhibou": 300,
  "Atar": 200
}
```

### 4.4 Étiquettes et ensembles de données

Ce format est utilisé pour les données qui incluent des étiquettes et des ensembles de données correspondants.

Fichier : `mock_agenceVsFamily.json`

```json
{
  "labels": [
    "Installation et Maintenance",
    "Services à la personne et à la collectivité",
    "Agriculture et Pêche, Espaces naturels et Espaces verts, Soins aux animaux",
    "Industrie",
    "Santé",
    "Transport et Logistique",
    "Commerce, Vente et Grande distribution",
    "Communication, Média et Multimédia",
    "Support à l'entreprise",
    "Banque, Assurance, Immobilier",
    "Hôtellerie-Restauration, Tourisme, Loisirs et Animation",
    "Arts et Façonnage d'ouvrages d'art",
    "Spectacle",
    "Construction, Bâtiment et Travaux publics"
  ],
  "datasets": [
    {
      "label": "Agency A",
      "data": [
        2,
        13,
        11,
        9,
        35,
        17,
        4,
        23,
        38,
        17,
        7,
        12,
        2,
        19
      ]
    },
    {
      "label": "Agency B",
      "data": [
        16,
        34,
        40,
        11,
        14,
        39,
        12,
        27,
        34,
        17,
        5,
        22,
        4,
        35
      ]
    },
    {
      "label": "Agency C",
      "data": [
        4,
        17,
        17,
        35,
        40,
        9,
        4,
        18,
        40,
        35,
        15,
        39,
        32,
        6
      ]
    }
  ]
}
```

## 5. Créer des visualisations

Pour créer un graphique à partir des données, suivez ces étapes :

### 5.1 Diagramme à barres

Un diagramme à barres est utilisé pour afficher des données avec des barres rectangulaires.

1. Importez les bibliothèques nécessaires et les données :
    ```javascript
    import { Bar } from 'chart.js';
    import data from './data/mock_regionCount.json';
    ```

2. Préparez les données pour le graphique :
    ```javascript
    const labels = Object.keys(data);
    const values = Object.values(data);

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Region Count',
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

### 5.2 Visualisation de carte

Une visualisation de carte est utilisée pour afficher des données géographiques.

1. Importez les bibliothèques nécessaires et les données :
    ```javascript
    import Map from 'maplibre-gl';
    import data from './data/mock_gpsCoordCandidates.json';
    ```

2. Préparez les données pour la carte :
    ```javascript
    const markers = data.map(entry => ({
      coordinates: [entry.center.lng, entry.center.lat],
      number: entry.num_points
    }));
    ```

3. Créez la carte :
    ```javascript
    const map = new Map({
      container: 'map', // container ID
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 2 // starting zoom
    });

    markers.forEach(marker => {
      new maplibre.Marker()
        .setLngLat(marker.coordinates)
        .setPopup(new maplibre.Popup().setText(`Number of points: ${marker.number}`))
        .addTo(map);
    });
    ```

## 6. Directives de contribution

Nous accueillons les contributions ! Pour contribuer, suivez ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature-branch`).
3. Apportez vos modifications.
4. Validez vos modifications (`git commit -m 'Add new feature'`).
5. Poussez vers la branche (`git push origin feature-branch`).
6. Créez une Pull Request.

Pour toute question ou support, veuillez contacter :

- [ismail@techghil.mr](mailto:ismail@techghil.mr)
- [a.fettah@techghil.mr](mailto:a.fettah@techghil.mr)

## 7. Versionnage

Nous utilisons le [versionnage sémantique](https://semver.org/) pour le versionnage. Pour les versions disponibles, consultez les [tags sur ce dépôt](https://github.com/Riminder/opendata.techghil.mr/tags).

## 8. Directives de message de commit

Nous suivons la spécification [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pour nos messages de commit :

- `feat`: Une nouvelle fonctionnalité
- `fix`: Une correction de bug
- `docs`: Modifications uniquement de la documentation
- `style`: Modifications qui n'affectent pas la signification du code (espaces blancs, formatage, points-virgules manquants, etc.)
- `refactor`: Une modification du code qui ne corrige ni un bug ni n'ajoute une fonctionnalité
- `perf`: Une modification du code qui améliore les performances
- `test`: Ajout de tests manquants ou correction de tests existants
- `chore`: Modifications du processus de build ou des outils auxiliaires et des bibliothèques telles que la génération de documentation

## 9. Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.