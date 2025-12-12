# NII Landing Migration - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate Canva-exported landing page (site.html) into Telegram Mini App as clean React components with Tailwind CSS.

**Architecture:** Single-page landing with 8 sections, scrollable. TMA SDK for viewport/theme, no TON Connect. Images downloaded locally. CTA button links to `https://t.me/tribute/app?startapp=sycj`.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, @tma.js/sdk-react

---

## Task 1: Download Media Assets

**Files:**
- Create: `public/images/` directory with 17 files

**Step 1: Create images directory**

```bash
mkdir -p public/images
```

**Step 2: Download all images**

```bash
cd public/images

# Hero section
curl -o hero-main.jpg "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/26c813638dc529d879ad943ec01e4449.jpg"
curl -o hero-logo.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/baaf50ae43f5054b378b1f485aee138e.png"
curl -o hero-decoration.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/6f5bd9a4a6d7b2b900406ad61e913abb.png"

# Reviews section
curl -o review-1.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/51b78694724a7b7ef0e19fec7a2ea49f.png"
curl -o review-2.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/710b6600fe1e3c5c0e93cee103d7b8dc.png"
curl -o review-3.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/7ba591813640e63b02f45fcc83e8f3fc.png"

# Cases section
curl -o case-1.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/017623c3b1a0098c399a23a65dcc4dfd.png"
curl -o case-2.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/08fb37b247f48c8445c26f22e0f4d022.png"
curl -o case-3.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/34142d4906e01d4968716c183d1f39d0.png"

# About section
curl -o about-photo.jpg "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/88bc294e7e70380ca5f6f628d58fd2c7.jpg"

# Other images
curl -o pricing-bg.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/35ba38629a07ca7bd79cc2d03f7af061.png"
curl -o values-icon.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/7da6668f3a181ac4eef455cb53eea42e.png"
curl -o decoration-1.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/b4a6c4a9a8769487a2b7e4115767354f.png"
curl -o decoration-2.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/c50169a25ca7065b36fd1df1948ba553.png"
curl -o decoration-3.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/e65e67b3f72e7c3b724ef47f12958566.png"
curl -o decoration-4.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/f27cd811aea499932076154e07424d90.png"
curl -o decoration-5.png "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/media/ff4530c6524c571f226eda94c0bbbc9f.png"

# Video
curl -o intro-video.mp4 "https://cooperative-skazka.my.canva.site/sprosiugudvina/_assets/video/bbf624e67b26f949643c9bc1fce68e5e.mp4"
```

**Step 3: Verify downloads**

```bash
ls -la public/images/
```

Expected: 17 files downloaded

**Step 4: Commit**

```bash
git add public/images/
git commit -m "feat: add landing page media assets"
```

---

## Task 2: Remove Unused Dependencies and Files

**Files:**
- Delete: `src/app/ton-connect/` (directory)
- Delete: `src/app/init-data/` (directory)
- Delete: `src/app/launch-params/` (directory)
- Delete: `src/app/theme-params/` (directory)
- Delete: `src/components/LocaleSwitcher/` (directory)
- Delete: `src/components/DisplayData/` (directory)
- Delete: `src/components/RGB/` (directory)
- Delete: `src/components/Link/` (directory)
- Delete: `src/core/i18n/` (directory)
- Delete: `public/locales/` (directory)
- Delete: `public/tonconnect-manifest.json`
- Delete: `src/app/_assets/ton.svg`
- Modify: `package.json`

**Step 1: Delete unused directories**

```bash
rm -rf src/app/ton-connect
rm -rf src/app/init-data
rm -rf src/app/launch-params
rm -rf src/app/theme-params
rm -rf src/components/LocaleSwitcher
rm -rf src/components/DisplayData
rm -rf src/components/RGB
rm -rf src/components/Link
rm -rf src/core/i18n
rm -rf public/locales
rm public/tonconnect-manifest.json
rm src/app/_assets/ton.svg
```

**Step 2: Update package.json - remove unused dependencies**

Modify `package.json`:

```json
{
  "name": "nii-miniapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "dev:https": "next dev --experimental-https",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tma.js/sdk-react": "^3.0.11",
    "eruda": "^3.4.3",
    "next": "16.0.7",
    "normalize.css": "^8.0.1",
    "react": "^19",
    "react-dom": "^19"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.17",
    "@types/node": "^24",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.4",
    "postcss": "^8",
    "tailwindcss": "^4.1.17",
    "typescript": "^5.9.3"
  }
}
```

**Step 3: Reinstall dependencies**

```bash
pnpm install
```

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove unused dependencies and demo pages"
```

---

## Task 3: Simplify Root Component

**Files:**
- Modify: `src/components/Root/Root.tsx`

**Step 1: Rewrite Root.tsx without TON Connect and i18n**

Replace entire file `src/components/Root/Root.tsx`:

```tsx
'use client';

import { type PropsWithChildren } from 'react';
import { miniApp, useSignal } from '@tma.js/sdk-react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { useDidMount } from '@/hooks/useDidMount';

import './styles.css';

function RootInner({ children }: PropsWithChildren) {
  const isDark = useSignal(miniApp.isDark);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {children}
    </div>
  );
}

export function Root(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="root__loading">Loading</div>
  );
}
```

**Step 2: Verify no TypeScript errors**

```bash
pnpm tsc --noEmit
```

Expected: No errors

**Step 3: Commit**

```bash
git add src/components/Root/Root.tsx
git commit -m "refactor: simplify Root component, remove TON Connect"
```

---

## Task 4: Simplify Layout

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Rewrite layout.tsx without i18n**

Replace entire file `src/app/layout.tsx`:

```tsx
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Root } from '@/components/Root/Root';

import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata: Metadata = {
  title: 'НИИ Времени и Пространства',
  description: 'Научно-Исследовательский Институт для предпринимателей, ремесленников, экспертов и фрилансеров',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
```

**Step 2: Verify build works**

```bash
pnpm build
```

Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "refactor: simplify layout, remove i18n"
```

---

## Task 5: Update Global Styles

**Files:**
- Modify: `src/app/_assets/globals.css`
- Modify: `tailwind.config.ts`

**Step 1: Update globals.css with landing styles**

Replace entire file `src/app/_assets/globals.css`:

```css
@import "tailwindcss";

:root {
  --color-bg-primary: #EFEEE9;
  --color-bg-white: #FFFFFF;
  --color-text-primary: #29340C;
  --color-accent: #000000;
}

body {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}
```

**Step 2: Update tailwind.config.ts with custom colors**

Replace entire file `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nii-bg': '#EFEEE9',
        'nii-white': '#FFFFFF',
        'nii-text': '#29340C',
        'nii-accent': '#000000',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 3: Commit**

```bash
git add src/app/_assets/globals.css tailwind.config.ts
git commit -m "feat: add landing page color scheme and styles"
```

---

## Task 6: Create Hero Section Component

**Files:**
- Create: `src/components/landing/HeroSection.tsx`

**Step 1: Create landing components directory**

```bash
mkdir -p src/components/landing
```

**Step 2: Create HeroSection.tsx**

Create file `src/components/landing/HeroSection.tsx`:

```tsx
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-nii-bg px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Main image with logo overlay */}
        <div className="relative mb-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/hero-main.jpg"
              alt="НИИ Времени и Пространства"
              width={400}
              height={300}
              className="w-full object-cover"
              priority
            />
          </div>
          {/* Logo overlay */}
          <div className="absolute top-2 left-2 bg-black/50 rounded px-2 py-1">
            <span className="text-white text-xs">Павел Лисовцов</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-nii-text mb-4">
          Научно-Исследовательский Институт
          <br />
          Времени и Пространства
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-nii-text mb-4">
          для предпринимателей, ремесленников,
          <br />
          экспертов и фрилансеров.
        </p>

        {/* Description */}
        <p className="text-base text-nii-text">
          Для тех, кто развивает свой проект
          <br />
          с командой, трудится в одиночку
          <br />
          или только вынашивает идею своего дела.
        </p>
      </div>
    </section>
  );
}
```

**Step 3: Commit**

```bash
git add src/components/landing/HeroSection.tsx
git commit -m "feat: add HeroSection component"
```

---

## Task 7: Create WhySection Component

**Files:**
- Create: `src/components/landing/WhySection.tsx`

**Step 1: Create WhySection.tsx**

Create file `src/components/landing/WhySection.tsx`:

```tsx
export function WhySection() {
  return (
    <section className="bg-nii-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-nii-text mb-6">
          Зачем к нам приходить?
        </h2>

        <p className="text-lg text-nii-text mb-4">
          Чтобы получить систему, структуру и ясность.
        </p>

        <p className="text-base text-nii-text">
          Все участники нашего института попадают
          в закрытый чат предпринимателей,
          где могут задать вопросы о своих проектах
          и получить ответы.
        </p>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/landing/WhySection.tsx
git commit -m "feat: add WhySection component"
```

---

## Task 8: Create ReviewsSection Component

**Files:**
- Create: `src/components/landing/ReviewsSection.tsx`

**Step 1: Create ReviewsSection.tsx**

Create file `src/components/landing/ReviewsSection.tsx`:

```tsx
import Image from 'next/image';

export function ReviewsSection() {
  const reviews = [
    { src: '/images/review-1.png', alt: 'Отзыв 1' },
    { src: '/images/review-2.png', alt: 'Отзыв 2' },
    { src: '/images/review-3.png', alt: 'Отзыв 3' },
  ];

  return (
    <section className="bg-nii-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-nii-text mb-6">
          Отзывы
        </h2>

        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={review.src}
                alt={review.alt}
                width={400}
                height={200}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/landing/ReviewsSection.tsx
git commit -m "feat: add ReviewsSection component"
```

---

## Task 9: Create PricingSection Component

**Files:**
- Create: `src/components/landing/PricingSection.tsx`

**Step 1: Create PricingSection.tsx**

Create file `src/components/landing/PricingSection.tsx`:

```tsx
export function PricingSection() {
  const features = [
    'воркшопы',
    'интенсивы',
    'мастер классы',
    'индивидуальные консультации',
  ];

  return (
    <section className="bg-nii-bg px-4 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-nii-text mb-2">
          За подписку в{' '}
          <span className="text-3xl">700 рублей</span>
          {' '}в месяц
        </h2>

        <p className="text-base text-nii-text mb-4">
          В отличие от бесплатного пространства,{' '}
          <span className="font-bold">#СПРОСИУГУДВИНА</span>
          {' '}в НИИ мы не просто играем в игры и отвечаем на вопросы —
          мы разрабатываем эти игры вместе.
        </p>

        <p className="text-base text-nii-text mb-4">
          Мы учимся писать статьи и осваиваем новый метод
          управления временем и пространством.
        </p>

        <div className="mb-4">
          <p className="text-base text-nii-text font-bold mb-2">
            Вы можете проходить:
          </p>
          <ul className="list-disc list-inside text-base text-nii-text">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="text-base text-nii-text">
          Вы можете стать не участником, а создателем игры.
        </p>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/landing/PricingSection.tsx
git commit -m "feat: add PricingSection component"
```

---

## Task 10: Create ValuesSection Component

**Files:**
- Create: `src/components/landing/ValuesSection.tsx`

**Step 1: Create ValuesSection.tsx**

Create file `src/components/landing/ValuesSection.tsx`:

```tsx
export function ValuesSection() {
  const values = ['бережность', 'внимание', 'поддержка'];

  return (
    <section className="bg-nii-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <p className="text-base text-nii-text mb-6">
          Мы здесь не для того, чтобы критиковать и оценивать,
          а чтобы создать пространство, в котором появится решение
          нужное именно вашему проекту, в котором появится ответ
          на интересующий вас вопрос.
        </p>

        <h2 className="text-2xl font-bold text-nii-text mb-4">
          Наши ценности
        </h2>

        <div className="flex flex-wrap gap-3">
          {values.map((value, index) => (
            <span
              key={index}
              className="bg-nii-bg px-4 py-2 rounded-full text-nii-text"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/landing/ValuesSection.tsx
git commit -m "feat: add ValuesSection component"
```

---

## Task 11: Create CasesSection Component

**Files:**
- Create: `src/components/landing/CasesSection.tsx`

**Step 1: Create CasesSection.tsx**

Create file `src/components/landing/CasesSection.tsx`:

```tsx
const cases = [
  {
    name: 'Маша',
    story: `пришла в НИИ с ощущением, что хочет сменить роль в жизни, но не понимала, кем стать и куда двигаться.`,
    result: `Через интервью, совместное написание статей, ответы и прояснение смыслов мы нашли её первое направление — и она провела тестовые мероприятия для детей. У неё родился первый продукт.`,
  },
  {
    name: 'Лариса',
    story: `парикмахер с Бали, мечтала путешествовать, но была привязана к клиентской базе.`,
    result: `Мы создали вместе пилотный онлайн-курс. Через три месяца она сделала первую продажу — девочке из Белграда. У неё появился путь к свободе.`,
  },
  {
    name: 'Алексей',
    story: `работал с командой в столярной мастерской. Пришёл в хаосе: проекты идут, но структуры нет.`,
    result: `Мы разработали для него таблицы, графики, систему управления. Через которые его мастерская стала предсказуемой и управляемой.`,
  },
];

export function CasesSection() {
  return (
    <section className="bg-nii-bg px-4 py-8">
      <div className="max-w-md mx-auto">
        <p className="text-base text-nii-text mb-6">
          В НИИ приходят предприниматели с опытом и начинающие, а также те,
          кто только мечтает о своём деле. Всех нас объединяет, независимо
          от уровня развития наших проектов, то, что мы сталкиваемся с вопросами,
          на которые ищем ответы. У нас индивидуальный подход:
          мы рассматриваем наши кейсы.
        </p>

        <div className="space-y-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-nii-white rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-nii-text mb-2">
                {caseItem.name}
              </h3>
              <p className="text-sm text-nii-text mb-2">
                {caseItem.story}
              </p>
              <p className="text-sm text-nii-text italic">
                {caseItem.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/landing/CasesSection.tsx
git commit -m "feat: add CasesSection component"
```

---

## Task 12: Create AboutSection Component

**Files:**
- Create: `src/components/landing/AboutSection.tsx`

**Step 1: Create AboutSection.tsx**

Create file `src/components/landing/AboutSection.tsx`:

```tsx
import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="bg-nii-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <p className="text-lg text-nii-text font-medium mb-4">
            И вот что я понял.
          </p>
          <p className="text-base text-nii-text mb-4">
            Ты не можешь сделать человека тем, кем он хочет —
            это ему придётся делать самому!
          </p>
          <p className="text-base text-nii-text mb-4">
            Но ты можешь быть рядом с ним на его пути,
            делиться с ним знаниями, теплом и любовью,
            поддерживать его.
          </p>
          <p className="text-base text-nii-text">
            Ты можешь поделиться с ним своей мечтой.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/about-photo.jpg"
              alt="Павел Лисовцов"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-nii-text">
            Мне 40 лет. Я люблю свою жену и семью. Воспитываю четырёх детей.
            Последние двенадцать лет строю свой бизнес.
            Четыре последних года консультирую ребят, помогая настроить их проекты.
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/landing/AboutSection.tsx
git commit -m "feat: add AboutSection component"
```

---

## Task 13: Create CtaSection Component

**Files:**
- Create: `src/components/landing/CtaSection.tsx`

**Step 1: Create CtaSection.tsx**

Create file `src/components/landing/CtaSection.tsx`:

```tsx
'use client';

import { openTelegramLink } from '@tma.js/sdk-react';

export function CtaSection() {
  const handleClick = () => {
    openTelegramLink('https://t.me/tribute/app?startapp=sycj');
  };

  return (
    <section className="bg-nii-bg px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        <button
          onClick={handleClick}
          className="w-full bg-nii-accent text-white font-bold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity"
        >
          Поступить в НИИ ВИП
        </button>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/landing/CtaSection.tsx
git commit -m "feat: add CtaSection component with TMA link"
```

---

## Task 14: Create Landing Page Index

**Files:**
- Create: `src/components/landing/index.ts`

**Step 1: Create index.ts barrel export**

Create file `src/components/landing/index.ts`:

```ts
export { HeroSection } from './HeroSection';
export { WhySection } from './WhySection';
export { ReviewsSection } from './ReviewsSection';
export { PricingSection } from './PricingSection';
export { ValuesSection } from './ValuesSection';
export { CasesSection } from './CasesSection';
export { AboutSection } from './AboutSection';
export { CtaSection } from './CtaSection';
```

**Step 2: Commit**

```bash
git add src/components/landing/index.ts
git commit -m "feat: add landing components barrel export"
```

---

## Task 15: Replace Main Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace page.tsx with landing page**

Replace entire file `src/app/page.tsx`:

```tsx
import {
  HeroSection,
  WhySection,
  ReviewsSection,
  PricingSection,
  ValuesSection,
  CasesSection,
  AboutSection,
  CtaSection,
} from '@/components/landing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhySection />
      <ReviewsSection />
      <PricingSection />
      <ValuesSection />
      <CasesSection />
      <AboutSection />
      <CtaSection />
    </main>
  );
}
```

**Step 2: Run dev server and verify**

```bash
pnpm dev
```

Expected: Landing page displays with all sections

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: replace main page with NII landing"
```

---

## Task 16: Final Cleanup and Build Verification

**Files:**
- Delete: `src/components/Page.tsx` (not used anymore)

**Step 1: Delete unused Page component**

```bash
rm src/components/Page.tsx
```

**Step 2: Run build to verify everything works**

```bash
pnpm build
```

Expected: Build succeeds without errors

**Step 3: Run linter**

```bash
pnpm lint
```

Expected: No errors

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final cleanup, remove unused Page component"
```

---

## Summary

**Total tasks:** 16
**Estimated commits:** 16

**Files created:**
- `public/images/` (17 media files)
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/WhySection.tsx`
- `src/components/landing/ReviewsSection.tsx`
- `src/components/landing/PricingSection.tsx`
- `src/components/landing/ValuesSection.tsx`
- `src/components/landing/CasesSection.tsx`
- `src/components/landing/AboutSection.tsx`
- `src/components/landing/CtaSection.tsx`
- `src/components/landing/index.ts`

**Files modified:**
- `package.json`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/_assets/globals.css`
- `src/components/Root/Root.tsx`
- `tailwind.config.ts`

**Files deleted:**
- `src/app/ton-connect/`
- `src/app/init-data/`
- `src/app/launch-params/`
- `src/app/theme-params/`
- `src/components/LocaleSwitcher/`
- `src/components/DisplayData/`
- `src/components/RGB/`
- `src/components/Link/`
- `src/components/Page.tsx`
- `src/core/i18n/`
- `public/locales/`
- `public/tonconnect-manifest.json`
- `src/app/_assets/ton.svg`
