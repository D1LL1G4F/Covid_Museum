import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import { LoaderFunction, useLoaderData } from 'remix';
import axios from 'axios';
import GalleryObject from '../components/GalleryObject';
import preloadedImages from '../consts/preloadedImages';
import { PreloadedImages } from '../types/apiTypes';

// server side fetching
export const loader: LoaderFunction = async () => {
  const res = await axios
    .get('https://api.harvardartmuseums.org/exhibition', {
      params: {
        apikey: process.env.HARWARD_API_KEY,
      },
    });
  return res.data;
};

const Exhibition = () => {
  const images: PreloadedImages = preloadedImages;
  const data = useLoaderData();

  return (
    <Grid>
      {images.map((image, index) => (
        <GalleryObject
          key={image.imageUrl}
          image={image}
          direction={index % 2 === 0 ? 'row' : 'row-reverse'}
        />
      ))}
      <code>{JSON.stringify(data)}</code>
    </Grid>
  );
};

export default Exhibition;
