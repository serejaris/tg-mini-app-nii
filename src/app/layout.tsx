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
