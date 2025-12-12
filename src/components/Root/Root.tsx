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
