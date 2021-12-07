import Stack from '@kiwicom/orbit-components/lib/Stack';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';

const IndexRoute = () => (
  <Stack direction="column" align="center" spacing="XXLarge">
    <Heading as="h2" type="title1">Welcome to the</Heading>
    <Heading as="h1" type="display">Covid Museum</Heading>
    <Heading as="h3" type="title2">
      <TextLink href="/exhibitions">🚪 ENTER 🚪</TextLink>
    </Heading>
  </Stack>
);

export default IndexRoute;
