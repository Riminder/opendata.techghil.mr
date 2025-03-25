# Techghil Mauritanie

<p align="center">
  <a href="https://techghil.mr/">
    <img src="static/logo-techghil.png" alt="Techghil Logo" width="200">
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
        <b>English</b> |
        <a href="i18n/README_fr.md">Français</a> |
        <a href="i18n/README_ar.md">العربية</a>
    </p>
</h4>

Techghil Mauritanie is a SvelteKit application designed to provide official statistics on employment in Mauritania. The project visualizes data using various charts and maps to offer insights into employment trends.

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Getting Started](#2-getting-started)
3. [Building the Project](#3-building-the-project)
4. [Data Structure](#4-data-structure)
5. [Creating Visualizations](#5-creating-visualizations)
6. [Contributing Guidelines](#6-contributing-guidelines)
7. [Versioning](#7-versioning)
8. [Commit Message Guidelines](#8-commit-message-guidelines)
9. [License](#9-license)

## 1. Project Overview

This project aims to present official employment statistics in Mauritania through interactive visualizations. It leverages SvelteKit for the frontend, TypeScript for type safety, and Tailwind CSS for styling. The visualizations are powered by libraries such as `chart.js` and `maplibre-gl`.

## 2. Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Riminder/opendata.techghil.mr.git
    cd opendata.techghil.mr
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the app in a new browser tab:
    ```bash
    npm run dev -- --open
    ```

## 3. Building the Project

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## 4. Data Structure

The data for visualizations is stored in JSON files. Below are examples of the expected data format for various visualizations:

### 4.1 Array of Objects

This format is used for data that includes multiple entries with specific attributes.

File: `mock_gpsCoordCandidates.json`

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

### 4.2 Array of Objects with Additional Attributes

This format is similar to the previous one but includes additional attributes for each entry.

File: `mock_gpsCoordOffers.json`

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

### 4.3 Key-Value Pairs

This format is used for data that maps keys to values.

File: `mock_regionCount.json`

```json
{
  "Nouakchott": 500,
  "Nouadhibou": 300,
  "Atar": 200
}
```

### 4.4 Labels and Datasets

This format is used for data that includes labels and corresponding datasets.

File: `mock_agenceVsFamily.json`

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

## 5. Creating Visualizations

To create a graph from the data, follow these steps:

### 5.1 Bar Chart

A bar chart is used to display data with rectangular bars.

1. Import the necessary libraries and data:
    ```javascript
    import { Bar } from 'chart.js';
    import data from './data/mock_regionCount.json';
    ```

2. Prepare the data for the chart:
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

3. Create the chart:
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

### 5.2 Map Visualization

A map visualization is used to display geographical data.

1. Import the necessary libraries and data:
    ```javascript
    import Map from 'maplibre-gl';
    import data from './data/mock_gpsCoordCandidates.json';
    ```

2. Prepare the data for the map:
    ```javascript
    const markers = data.map(entry => ({
      coordinates: [entry.center.lng, entry.center.lat],
      number: entry.num_points
    }));
    ```

3. Create the map:
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

## 6. Contributing Guidelines

We welcome contributions! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

For any questions or support, please contact:

- [ismail@techghil.mr](mailto:ismail@techghil.mr)
- [a.fettah@techghil.mr](mailto:a.fettah@techghil.mr)

## 7. Versioning

We use [Semantic Versioning](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Riminder/opendata.techghil.mr/tags).

## 8. Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for our commit messages:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

## 9. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.