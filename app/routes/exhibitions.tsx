import Box from '@kiwicom/orbit-components/lib/Box';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import axios from 'axios';
import { useLoaderData, LoaderFunction } from 'remix';
import ExhibitionObject from '../components/ExhibitionObject';
import Paging from '../components/Paging';
import { ExhibitionResponse } from '../types/apiTypes';

// server side fetching
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pageNumber = url.searchParams.get('page');
  const res = await axios.get<ExhibitionResponse>('https://api.harvardartmuseums.org/exhibition', {
    params: {
      apikey: process.env.HARWARD_API_KEY,
      page: pageNumber,
    },
  });
  return res.data;
};

const Exhibitions = () => {
  const response = useLoaderData<ExhibitionResponse>();

  return (
    <Stack>
      <Box>
        <Grid>
          {response.records.map(exhibition => (
            <ExhibitionObject
              key={exhibition.id}
              exhibition={exhibition}
            />
          ))}
        </Grid>
      </Box>
      <Box align="center" justify="center" display="flex" width="100%" direction="row">
        <Paging pageCount={response.info.pages} page={response.info.page} toUrl="/exhibitions" />
      </Box>

    </Stack>
  );
};

export default Exhibitions;
