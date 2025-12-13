'use client';

import { openTelegramLink } from '@tma.js/sdk-react';

export function CtaSection() {
  const handleClick = () => {
    openTelegramLink('https://t.me/tribute/app?startapp=sycj');
  };

  return (
    <section className="bg-nii-bg px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <button
          onClick={handleClick}
          className="btn-yellow w-full text-xl"
        >
          Поступить в НИИ ВИП
        </button>
      </div>
    </section>
  );
}
