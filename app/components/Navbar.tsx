import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import { FC } from "react";

const Navbar: FC = () => (
  <NavigationBar>
    <Stack direction="row" align="center" justify="center">
      <ButtonLink href="/">
        <img src="/exhibition.png" alt="Covid museum" height="40px" />
      </ButtonLink>
      <LinkList direction="row">
        <TextLink type="secondary" href="/">
          Home
        </TextLink>
        <TextLink type="secondary" href="/gallery">
          Gallery
        </TextLink>
        <TextLink type="secondary" href="/exhibition">
          Exhibitions
        </TextLink>
      </LinkList>
      <Stack inline>
        <LinkList direction="row">
          <TextLink type="secondary" href="/about">
            About
          </TextLink>
          <TextLink
            type="secondary"
            href="https://github.com/D1LL1G4F/Covid_Museum"
          >
            Github
          </TextLink>
        </LinkList>
      </Stack>
    </Stack>
  </NavigationBar>
);

export default Navbar;
