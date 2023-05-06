import { NextPage } from 'next';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/layout/element';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import { ErrorBoundaryComponent } from '@/views/error/boundary.component';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundaryComponent>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundaryComponent>
    </ThemeProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const name = metric.name.replace('Next.js-', '');
  const value = metric.value.toFixed(name === 'CLS' ? 1 : 0);
  console.info(`CWV-${name}:${value}:${metric.startTime ? Math.round(metric.startTime) : 0}`);
}
