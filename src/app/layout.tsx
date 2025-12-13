import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { Root } from '@/components/Root/Root';

import 'normalize.css/normalize.css';
import './_assets/globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'НИИ Времени и Пространства',
  description: 'Научно-Исследовательский Институт для предпринимателей, ремесленников, экспертов и фрилансеров',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className={montserrat.className}>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
