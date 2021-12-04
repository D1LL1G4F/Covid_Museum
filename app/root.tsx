import { LiveReload } from "remix";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import StylesContext from "./components/StylesContext";

export default function Root() {
  const styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {styles !== null && (
          <style
            dangerouslySetInnerHTML={{
              __html: `</style>${styles}<style>`,
            }}
          />
        )}
        <title>Covid Museum</title>
      </head>
      <body>
        <Navbar />
        <Layout type="Booking">
          <LayoutColumn>Column1</LayoutColumn>
          <LayoutColumn>Column2</LayoutColumn>
        </Layout>

        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
