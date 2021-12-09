import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Box from '@kiwicom/orbit-components/lib/Box';
import styled from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';

const TitleHeading = styled.h2`
  font-size: 5vh;
`;

const BannerHeading = styled.h1`
  font-size: 10vh;
  font-weight: bold;
`;

const EnterHeading = styled.h3`
  font-size: 20vh;
  height: fit-content;
  margin: 0;
`;

const IndexRoute = () => (
  <Stack align="center" direction="column">
    <Box display="flex" width="100%" tablet={{ width: 'fit-content' }} height="20%" align="end"><TitleHeading>Welcome to the</TitleHeading></Box>
    <Box display="flex" height="20%" align="center"><BannerHeading>Covid Museum</BannerHeading></Box>
    <Box display="flex" align="center" height="300px">
      <TextLink href="/gallery"><EnterHeading>🚪</EnterHeading></TextLink>
    </Box>
  </Stack>

);

export default IndexRoute;
