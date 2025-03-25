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

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Building the Project](#building-the-project)
4. [Data Structure](#data-structure)
5. [Creating Visualizations](#creating-visualizations)
6. [Sample Dataset](#sample-dataset)
7. [Contributing Guidelines](#contributing-guidelines)
8. [Versioning](#versioning)
9. [Commit Message Guidelines](#commit-message-guidelines)
10. [Using Docker](#using-docker)
11. [Using Makefile](#using-makefile)
12. [License](#license)

## 1. Project Overview

This project aims to present official employment statistics in Mauritania through interactive visualizations. It leverages SvelteKit for the frontend, TypeScript for type safety, and Tailwind CSS for styling. The visualizations are powered by libraries such as `chart.js` and `maplibre-gl`.

## 2. Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/opendata.techghil.mr.git
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

The data for visualizations is stored in JSON files. Here is an example of the data structure:

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

## 5. Creating Visualizations

To create a graph from the data, follow these steps:

1. Import the necessary libraries and data:
    ```javascript
    import { Bar } from 'chart.js';
    import data from './data/employment.json';
    ```

2. Prepare the data for the chart:
    ```javascript
    const labels = Object.keys(data.employment.sectors);
    const values = Object.values(data.employment.sectors);

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Employment by Sector',
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

## 6. Sample Dataset

Here is a sample of the anonymized dataset:

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

## 7. Contributing Guidelines

We welcome contributions! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

For any questions or support, please contact:

- [xxx@techghil.mr](mailto:xxx@techghil.mr)
- [yyy@techghil.mr](mailto:yyy@techghil.mr)

## 8. Versioning

We use [Semantic Versioning](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/yourusername/opendata.techghil.mr/tags).

## 9. Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for our commit messages:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

## 10. Using Docker

To build and run the project using Docker:

1. Build the Docker image:
    ```bash
    docker build -t techghil-mauritanie .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 techghil-mauritanie
    ```

## 11. Using Makefile

You can use the Makefile to simplify common tasks:

- Install dependencies:
    ```bash
    make install
    ```

- Start the development server:
    ```bash
    make dev
    ```

- Build the project:
    ```bash
    make build
    ```

- Build the Docker image:
    ```bash
    make docker-build
    ```

- Run the Docker container:
    ```bash
    make docker-run
    ```

## 12. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.