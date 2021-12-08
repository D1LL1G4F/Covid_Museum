// import Box from '@kiwicom/orbit-components/lib/Box';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Collapse from '@kiwicom/orbit-components/lib/Collapse';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import Text from '@kiwicom/orbit-components/lib/Text';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import axios from 'axios';
import { FC } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import Box from '@kiwicom/orbit-components/lib/Box';
import ImageList from '../../components/ImageList';
import { DetailObject } from '../../types/objectAPI';
import AsideInfo from '../../components/AsideInfo';

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
    <Box position="relative" minWidth="140%" right="20%">
      <Stack align="center" direction="column">
        <Heading as="h1">{data.title}</Heading>
        <Grid columns="2fr 1fr" columnGap="10px">
          {data.images && <ImageList images={data.images} />}
          <AsideInfo info={data} />
        </Grid>
        {data.contextualtext
        && (
        <Collapse
          initialExpanded
          label={<Text uppercase size="large">Context</Text>}
        >
          <div style={{ whiteSpace: 'pre-wrap' }}>
            <Text>
              {data.contextualtext[0].text}
            </Text>
          </div>
        </Collapse>
        )}
        {data.details && data.details.technical
        && (
        <Card title={<Text uppercase size="large">Technical Details</Text>}>
          {data.details.technical.map(entity => (
            <CardSection expandable key={entity.type} title={entity.type}>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                <Text>
                  {entity.text}
                </Text>
              </div>
            </CardSection>
          ))}
        </Card>
        )}
        <Text size="small">{data.creditline}</Text>
      </Stack>
    </Box>
  );
};

export default Detail;
