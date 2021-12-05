import { LiveReload, Outlet } from 'remix';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import { useContext } from 'react';
import styled from 'styled-components';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import StylesContext from './components/StylesContext';
import Navbar from './components/Navbar';

const NavContainer = styled.header`
  z-index: 99;
  position: relative;
`;

const OverlordGrid = styled(Grid)`
  min-height: 100vh;
`;

export default function Root() {
  const styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `</style>${styles}<style>`,
          }}
        />
        <title>Covid Museum</title>
      </head>
      <body>
        <OverlordGrid rows="64px 1fr">
          <NavContainer>
            <Navbar />
          </NavContainer>

          <Layout type="MMB">
            <LayoutColumn>
              <Outlet />
            </LayoutColumn>
          </Layout>
        </OverlordGrid>

        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
