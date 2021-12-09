import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import StylesContext from './components/StylesContext';
import Navbar from './components/Navbar';
import preloadedImages from './consts/preloadedImages';

const NavContainer = styled.header`
  z-index: 99;
  position: relative;
`;

const GridWrapper = styled(Grid)`
  min-height: 100vh;
`;

export const meta: MetaFunction = () => {
  const description = 'Explore art and antics without getting sick!';
  return {
    viewport: 'width=device-width,initial-scale=1',
    description,
    keywords: 'covid-19,covid,coronavirus,museum,gallery,art',
    'twitter:image':
      'https://i.ibb.co/fGvpQGB/exhibition.png',
    'twitter:title': 'Covid Museum',
    'twitter:description': description,
    'og:image':
      'https://i.ibb.co/fGvpQGB/exhibition.png',
    'og:title': 'Covid Museum',
    'og:type': 'website',
    'og:description': description,
  };
};

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/exhibition.png',
    type: 'image/png',
  },
  ...preloadedImages.map(image => ({
    rel: 'preload',
    href: image.primaryimageurl,
    as: 'image',
  })),
];

function Document({ children, title }: { children: ReactNode; title: string }) {
  const styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `</style>${styles}<style>`,
          }}
        />
        <title>{title}</title>
      </head>
      <body>
        <ScrollRestoration />
        <Scripts />
        <GridWrapper rows="64px 1fr">
          <NavContainer>
            <Navbar />
          </NavContainer>

          <Layout type="MMB">
            <LayoutColumn>{children}</LayoutColumn>
          </Layout>
        </GridWrapper>

        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <Document title="Covid Museum">
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`Covid Museum | ${caught.status} ${caught.statusText}`}>
      <div className="error-container">
        <h1>
          {caught.status}
          {' '}
          {caught.statusText}
        </h1>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <Document title="Covid Museum | Uh-oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
