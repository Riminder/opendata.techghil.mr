# تكغيل موريتانيا

<p align="center">
  <a href="https://techghil.mr/">
    <img src="../static/logo-techghil.png" alt="شعار تكغيل" width="200">
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
        <a href="README_fr.md">Français</a> |
        <b>العربية</b>
    </p>
</h4>

تكغيل موريتانيا هو تطبيق SvelteKit مصمم لتوفير إحصاءات رسمية عن التوظيف في موريتانيا. يعرض المشروع البيانات باستخدام رسوم بيانية وخرائط متنوعة لتقديم رؤى حول اتجاهات التوظيف.

## جدول المحتويات

1. [نظرة عامة على المشروع](#1-نظرة-عامة-على-المشروع)
2. [البدء](#2-البدء)
3. [بناء المشروع](#3-بناء-المشروع)
4. [هيكل البيانات](#4-هيكل-البيانات)
5. [إنشاء التصورات](#5-إنشاء-التصورات)
6. [عينة من مجموعة البيانات](#6-عينة-من-مجموعة-البيانات)
7. [إرشادات المساهمة](#7-إرشادات-المساهمة)
8. [إصدار النسخ](#8-إصدار-النسخ)
9. [إرشادات رسائل الالتزام](#9-إرشادات-رسائل-الالتزام)
10. [استخدام Docker](#10-استخدام-docker)
11. [استخدام Makefile](#11-استخدام-makefile)
12. [الرخصة](#12-الرخصة)

## 1. نظرة عامة على المشروع

يهدف هذا المشروع إلى تقديم إحصاءات رسمية عن التوظيف في موريتانيا من خلال تصورات تفاعلية. يستخدم SvelteKit للواجهة الأمامية، TypeScript لأمان الأنواع، وTailwind CSS للتصميم. يتم تشغيل التصورات بواسطة مكتبات مثل `chart.js` و `maplibre-gl`.

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

4. افتح التطبيق في علامة تبويب جديدة في المتصفح:
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

> لنشر تطبيقك، قد تحتاج إلى تثبيت [مهايئ](https://svelte.dev/docs/kit/adapters) لبيئة الاستهداف الخاصة بك.

## 4. هيكل البيانات

يتم تخزين البيانات للتصورات في ملفات JSON. إليك مثال على هيكل البيانات:

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

## 5. إنشاء التصورات

لإنشاء رسم بياني من البيانات، اتبع هذه الخطوات:

1. استيراد المكتبات والبيانات اللازمة:
    ```javascript
    import { Bar } from 'chart.js';
    import data from './data/employment.json';
    ```

2. إعداد البيانات للرسم البياني:
    ```javascript
    const labels = Object.keys(data.employment.sectors);
    const values = Object.values(data.employment.sectors);

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'التوظيف حسب القطاع',
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

## 6. عينة من مجموعة البيانات

إليك عينة من مجموعة البيانات المجهولة:

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

## 7. إرشادات المساهمة

نرحب بالمساهمات! للمساهمة، اتبع هذه الخطوات:

1. استنساخ المستودع.
2. إنشاء فرع جديد (`git checkout -b feature-branch`).
3. قم بإجراء التغييرات الخاصة بك.
4. التزم بتغييراتك (`git commit -m 'إضافة ميزة جديدة'`).
5. ادفع إلى الفرع (`git push origin feature-branch`).
6. إنشاء طلب سحب.

لأي أسئلة أو دعم، يرجى الاتصال بـ:

- [xxx@techghil.mr](mailto:xxx@techghil.mr)
- [yyy@techghil.mr](mailto:yyy@techghil.mr)

## 8. إصدار النسخ

نستخدم [الإصدار الدلالي](https://semver.org/) لإصدار النسخ. للحصول على الإصدارات المتاحة، راجع [العلامات على هذا المستودع](https://github.com/yourusername/opendata.techghil.mr/tags).

## 9. إرشادات رسائل الالتزام

نتبع مواصفات [الالتزامات التقليدية](https://www.conventionalcommits.org/en/v1.0.0/) لرسائل الالتزام الخاصة بنا:

- `feat`: ميزة جديدة
- `fix`: إصلاح خطأ
- `docs`: تغييرات في الوثائق فقط
- `style`: تغييرات لا تؤثر على معنى الكود (المسافات البيضاء، التنسيق، الفواصل المنقوطة المفقودة، إلخ)
- `refactor`: تغيير في الكود لا يصلح خطأ ولا يضيف ميزة
- `perf`: تغيير في الكود يحسن الأداء
- `test`: إضافة اختبارات مفقودة أو تصحيح اختبارات موجودة
- `chore`: تغييرات في عملية البناء أو الأدوات المساعدة والمكتبات مثل توليد الوثائق

## 10. استخدام Docker

لبناء وتشغيل المشروع باستخدام Docker:

1. بناء صورة Docker:
    ```bash
    docker build -t techghil-mauritanie .
    ```

2. تشغيل حاوية Docker:
    ```bash
    docker run -p 3000:3000 techghil-mauritanie
    ```

## 11. استخدام Makefile

يمكنك استخدام Makefile لتبسيط المهام الشائعة:

- تثبيت التبعيات:
    ```bash
    make install
    ```

- بدء خادم التطوير:
    ```bash
    make dev
    ```

- بناء المشروع:
    ```bash
    make build
    ```

- بناء صورة Docker:
    ```bash
    make docker-build
    ```

- تشغيل حاوية Docker:
    ```bash
    make docker-run
    ```

## 12. الرخصة

هذا المشروع مرخص بموجب رخصة MIT. راجع ملف [LICENSE](LICENSE) لمزيد من التفاصيل.