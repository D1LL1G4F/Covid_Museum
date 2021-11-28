import { ReactNode } from 'react';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import type { LinksFunction } from 'remix';

// eslint-disable-next-line import/no-unresolved
import globalStylesUrl from '~/styles/global.css';
// eslint-disable-next-line import/no-unresolved
import darkStylesUrl from '~/styles/dark.css';

// https://remix.run/api/app#links
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStylesUrl },
  {
    rel: 'stylesheet',
    href: darkStylesUrl,
    media: '(prefers-color-scheme: dark)',
  },
];

const Document = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      {title ? <title>{title}</title> : null}
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
    </body>
  </html>
);

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="remix-app">
    <header className="remix-app__header">
      <div className="container remix-app__header-content">
        <Link to="/" title="Remix" className="remix-app__header-home-link">
          Covid Museum
        </Link>
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://github.com/D1LL1G4F/Covid_Museum">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="remix-app__main">
      <div className="container remix-app__main-content">{children}</div>
    </div>
    <footer className="remix-app__footer">
      <div className="container remix-app__footer-content">
        <p>&copy; You!</p>
      </div>
    </footer>
  </div>
);

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export const CatchBoundary = () => {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}
          :
          {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
};

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export const ErrorBoundary = ({ error }: { error: Error }) => {
  // eslint-disable-next-line no-console
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document title="Covid Museum">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
