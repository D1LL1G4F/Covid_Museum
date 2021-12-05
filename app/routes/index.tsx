import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import GalleryObject from '../components/GalleryObject';

const Images = [
  {
    title: 'Black-figure Aryballos: Two heraldic bearded sirens with woman',
    dated: 'c. 600 BCE-575 BCE',
    department: 'Department of Ancient and Byzantine Art & Numismatics',
    division: 'Asian and Mediterranean Art',
    period: 'Archaic period',
    imageUrl: 'https://nrs.harvard.edu/urn-3:HUAM:767068',
  },
  {
    title: 'Collection of Beads and Amulets',
    dated: '1st Millennium BCE-1st Millennium CE',
    department: 'Department of Ancient and Byzantine Art & Numismatics',
    division: 'Asian and Mediterranean Art',
    period: 'Late Period to Roman',
    imageUrl: 'https://nrs.harvard.edu/urn-3:HUAM:INV028585_dynmc',
  },
  {
    title: 'Lid or Bell',
    dated: 'mid 1st millennium BCE-mid 1st millennium CE',
    department: 'Department of Ancient and Byzantine Art & Numismatics',
    division: 'Asian and Mediterranean Art',
    period: 'Roman period',
    imageUrl: 'https://nrs.harvard.edu/urn-3:HUAM:LEG251164_dynmc',
  },
];

const IndexRoute = () => (
  <Grid>
    {Images.map((image, index) => (
      <GalleryObject
        image={image}
        direction={index % 2 === 0 ? 'row' : 'row-reverse'}
      />
    ))}
  </Grid>
);

export default IndexRoute;
