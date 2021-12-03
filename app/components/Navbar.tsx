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
        <TextLink type="secondary">Travel</TextLink>
        <TextLink type="secondary">Rooms</TextLink>
        <TextLink type="secondary">Careers</TextLink>
      </LinkList>
      <Stack inline>
        <LinkList direction="row">
          <TextLink type="secondary">English</TextLink>
          <TextLink type="secondary">Help</TextLink>
          <TextLink type="secondary">My account</TextLink>
        </LinkList>
      </Stack>
    </Stack>
  </NavigationBar>
);

export default Navbar;
