import { LiveReload } from "remix";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
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
