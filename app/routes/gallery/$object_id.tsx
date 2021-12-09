// import Box from '@kiwicom/orbit-components/lib/Box';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import Text from '@kiwicom/orbit-components/lib/Text';
import axios from 'axios';
import { FC } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import Box from '@kiwicom/orbit-components/lib/Box';
import ImageList from '../../components/ImageList';
import { DetailObject } from '../../types/objectAPI';
import AsideInfo from '../../components/AsideInfo';
import Context from '../../components/Context';
import TechnicalDetails from '../../components/TechnicalDetails';

export const loader: LoaderFunction = async ({ params }): Promise<DetailObject> => {
  const res = await axios
    .get(`https://api.harvardartmuseums.org/object/${params.object_id}`, {
      params: {
        apikey: process.env.HARWARD_API_KEY,
      },
    });
  return res.data;
};

const Detail: FC = () => {
  const data: DetailObject = useLoaderData();
  return (
    <Box position="relative" largeDesktop={{ minWidth: '140%', right: '20%' }}>
      <Stack align="center" direction="column">
        <Heading as="h1">{data.title}</Heading>
        <Grid
          largeDesktop={{ columns: '2fr 1fr', rows: '1fr' }}
          mediumMobile={{ rows: '1fr 1fr' }}
          columnGap="10px"
        >
          {data.images && <ImageList images={data.images} />}
          <Box minWidth="30%">
            <AsideInfo info={data} />
          </Box>
        </Grid>
        {data.contextualtext && <Context label="Context" text={data.contextualtext[0].text} />}
        {data.details && data.details.technical && <TechnicalDetails label="TechnicalDetails" details={data.details.technical} />}
        <Text size="small">{data.creditline}</Text>
      </Stack>
    </Box>
  );
};

export default Detail;
