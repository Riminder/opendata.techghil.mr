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
        <b>English</b> |
        <a href="i18n/README_fr.md">Français</a> |
        <a href="i18n/README_ar.md">العربية</a>
    </p>
</h4>

Techghil Mauritanie هو تطبيق SvelteKit مصمم لتوفير إحصاءات رسمية عن التوظيف في موريتانيا. يقوم المشروع بتصور البيانات باستخدام مخططات وخرائط متنوعة لتقديم رؤى حول اتجاهات التوظيف.

## جدول المحتويات

1. [نظرة عامة على المشروع](#1-نظرة-عامة-على-المشروع)
2. [البدء](#2-البدء)
3. [بناء المشروع](#3-بناء-المشروع)
4. [هيكل البيانات](#4-هيكل-البيانات)
5. [إنشاء التصورات](#5-إنشاء-التصورات)
6. [إرشادات المساهمة](#6-إرشادات-المساهمة)
7. [إصدار النسخ](#7-إصدار-النسخ)
8. [إرشادات رسالة الالتزام](#8-إرشادات-رسالة-الالتزام)
9. [الترخيص](#9-الترخيص)

## 1. نظرة عامة على المشروع

يهدف هذا المشروع إلى تقديم إحصاءات التوظيف الرسمية في موريتانيا من خلال تصورات تفاعلية. يستخدم SvelteKit للواجهة الأمامية، TypeScript لأمان الأنواع، و Tailwind CSS للتصميم. يتم تشغيل التصورات بواسطة مكتبات مثل `chart.js` و `maplibre-gl`.

## 2. البدء

لإعداد المشروع محليًا، اتبع هذه الخطوات:

1. استنساخ المستودع:
    ```bash
    git clone https://github.com/Riminder/opendata.techghil.mr.git
    cd opendata.techghil.mr
    ```

2. تثبيت التبعيات:
    ```bash
    npm install
    ```

3. بدء خادم التطوير:
    ```bash
    npm run dev
    ```

4. فتح التطبيق في علامة تبويب جديدة في المتصفح:
    ```bash
    npm run dev -- --open
    ```

## 3. بناء المشروع

لإنشاء نسخة إنتاجية من تطبيقك:

```bash
npm run build
```

يمكنك معاينة النسخة الإنتاجية باستخدام:

```bash
npm run preview
```

> لنشر تطبيقك، قد تحتاج إلى تثبيت [محول](https://svelte.dev/docs/kit/adapters) لبيئة الهدف الخاصة بك.

## 4. هيكل البيانات

يتم تخزين البيانات للتصورات في ملفات JSON. فيما يلي أمثلة على تنسيق البيانات المتوقع للتصورات المختلفة:

### 4.1 مصفوفة من الكائنات

يُستخدم هذا التنسيق للبيانات التي تتضمن إدخالات متعددة بسمات محددة.

ملف: `mock_gpsCoordCandidates.json`

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

### 4.2 مصفوفة من الكائنات مع سمات إضافية

هذا التنسيق مشابه للتنسيق السابق ولكنه يتضمن سمات إضافية لكل إدخال.

ملف: `mock_gpsCoordOffers.json`

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

### 4.3 أزواج المفتاح والقيمة

يُستخدم هذا التنسيق للبيانات التي تربط المفاتيح بالقيم.

ملف: `mock_regionCount.json`

```json
{
  "Nouakchott": 500,
  "Nouadhibou": 300,
  "Atar": 200
}
```

### 4.4 تسميات ومجموعات البيانات

يُستخدم هذا التنسيق للبيانات التي تتضمن تسميات ومجموعات بيانات مقابلة.

ملف: `mock_agenceVsFamily.json`

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

## 5. إنشاء التصورات

لإنشاء رسم بياني من البيانات، اتبع هذه الخطوات:

### 5.1 مخطط شريطي

يُستخدم المخطط الشريطي لعرض البيانات باستخدام أشرطة مستطيلة.

1. استيراد المكتبات والبيانات اللازمة:
    ```javascript
    import { Bar } from 'chart.js';
    import data from './data/mock_regionCount.json';
    ```

2. إعداد البيانات للرسم البياني:
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

3. إنشاء الرسم البياني:
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

### 5.2 تصور الخريطة

يُستخدم تصور الخريطة لعرض البيانات الجغرافية.

1. استيراد المكتبات والبيانات اللازمة:
    ```javascript
    import Map from 'maplibre-gl';
    import data from './data/mock_gpsCoordCandidates.json';
    ```

2. إعداد البيانات للخريطة:
    ```javascript
    const markers = data.map(entry => ({
      coordinates: [entry.center.lng, entry.center.lat],
      number: entry.num_points
    }));
    ```

3. إنشاء الخريطة:
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

## 6. إرشادات المساهمة

نرحب بالمساهمات! للمساهمة، اتبع هذه الخطوات:

1. استنساخ المستودع.
2. إنشاء فرع جديد (`git checkout -b feature-branch`).
3. قم بإجراء التغييرات الخاصة بك.
4. التزم بتغييراتك (`git commit -m 'Add new feature'`).
5. ادفع إلى الفرع (`git push origin feature-branch`).
6. إنشاء طلب سحب.

لأي أسئلة أو دعم، يرجى الاتصال بـ:

- [ismail@techghil.mr](mailto:ismail@techghil.mr)
- [ahmedou@dcs-sarl.com](mailto:ahmedou@dcs-sarl.com)

## 7. إصدار النسخ

نحن نستخدم [الإصدار الدلالي](https://semver.org/) لإصدار النسخ. للحصول على الإصدارات المتاحة، راجع [العلامات على هذا المستودع](https://github.com/yourusername/opendata.techghil.mr/tags).

## 8. إرشادات رسالة الالتزام

نحن نتبع مواصفات [الالتزامات التقليدية](https://www.conventionalcommits.org/en/v1.0.0/) لرسائل الالتزام الخاصة بنا:

- `feat`: ميزة جديدة
- `fix`: إصلاح خطأ
- `docs`: تغييرات في الوثائق فقط
- `style`: تغييرات لا تؤثر على معنى الكود (المسافات البيضاء، التنسيق، الفواصل المنقوطة المفقودة، إلخ)
- `refactor`: تغيير في الكود لا يصلح خطأ ولا يضيف ميزة
- `perf`: تغيير في الكود يحسن الأداء
- `test`: إضافة اختبارات مفقودة أو تصحيح اختبارات موجودة
- `chore`: تغييرات في عملية البناء أو الأدوات المساعدة والمكتبات مثل توليد الوثائق

## 9. الترخيص

هذا المشروع مرخص بموجب ترخيص MIT. راجع ملف [LICENSE](LICENSE) لمزيد من التفاصيل.