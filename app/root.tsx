import { LiveReload } from 'remix';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import { useContext } from 'react';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Button from '@kiwicom/orbit-components/lib/primitives/ButtonPrimitive';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import StylesContext from './components/StylesContext';
import Navbar from './components/Navbar';

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
        <Stack direction="column">
          <Navbar />
          <Layout type="Booking">
            <LayoutColumn>Column1</LayoutColumn>
            <LayoutColumn>Column2</LayoutColumn>
          </Layout>
          <Button>My Button</Button>
          <TextLink>Hello World!</TextLink>
        </Stack>

        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
