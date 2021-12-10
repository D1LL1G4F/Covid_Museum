import { LoaderFunction, useLoaderData, useSearchParams } from 'remix';
import axios from 'axios';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Box from '@kiwicom/orbit-components/lib/Box';
import { ObjectResponse } from '../../types/apiTypes';
import Paging from '../../components/Paging';
import GalleryObject from '../../components/GalleryObject';
import styles from '../../styles/gallery.css';

// server side fetching
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const res = await axios.get<ObjectResponse>(`https://api.harvardartmuseums.org/object${url.search}`, {
    params: {
      apikey: process.env.HARWARD_API_KEY,
    },
  });

  return res.data;
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Gallery = () => {
  const response = useLoaderData<ObjectResponse>();
  const [searchParams] = useSearchParams();

  searchParams.delete('page');

  return (
    <Stack>
      <Box>
        <Box className="container">
          {response.records.map(image => (
            <GalleryObject
              key={image.id}
              image={image}
              columnClassName="item"
              imageClassName="item__col item__image"
              textClassName="item__col item__text"
            />
          ))}
        </Box>
      </Box>
      <Box align="center" justify="center" display="flex" width="100%" direction="row">
        <Paging pageCount={response.info.pages} page={response.info.page} toUrl="/gallery" />
      </Box>

    </Stack>
  );
};

export default Gallery;
