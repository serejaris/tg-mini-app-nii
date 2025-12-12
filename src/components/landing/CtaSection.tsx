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
