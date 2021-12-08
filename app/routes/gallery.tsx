import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import { LoaderFunction, useLoaderData } from 'remix';
import axios from 'axios';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Box from '@kiwicom/orbit-components/lib/Box';
import GalleryObject from '../components/GalleryObject';
import { ObjectResponse } from '../types/apiTypes';
import Paging from '../components/Paging';

// server side fetching
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pageNumber = url.searchParams.get('page');
  const res = await axios.get<ObjectResponse>('https://api.harvardartmuseums.org/object', {
    params: {
      apikey: process.env.HARWARD_API_KEY,
      hasimage: 1,
      page: pageNumber,
    },
  });
  res.data.records = res.data.records.filter(record => record.primaryimageurl);
  return res.data;
};

const Gallery = () => {
  const response = useLoaderData<ObjectResponse>();

  return (
    <Stack>
      <Box>
        <Grid>
          {response.records.map((image, index) => (
            <GalleryObject
              key={image.primaryimageurl}
              image={image}
              direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            />
          ))}
        </Grid>
      </Box>
      <Box align="center" justify="center" display="flex" width="100%" direction="row">
        <Paging pageCount={response.info.pages} page={response.info.page} toUrl="/gallery" />
      </Box>

    </Stack>
  );
};

export default Gallery;
