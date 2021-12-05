import Box from '@kiwicom/orbit-components/lib/Box';
import Table, {
  TableBody,
  TableRow,
  TableCell,
} from '@kiwicom/orbit-components/lib/Table';

import { FC } from 'react';

type Image = {
  title: string;
  dated: string;
  department: string;
  division: string;
  period: string;
  imageUrl: string;
};

type Props = {
  image: Image;
  direction: 'row' | 'row-reverse';
};

const GalleryObject: FC<Props> = ({ image, direction }) => (
  <Box
    height="500px"
    align="center"
    display="flex"
    padding="medium"
    justify="center"
    direction={direction}
  >
    <Box
      height="100%"
      width="50%"
      borderRadius="small"
      margin="large"
      align="center"
      justify="center"
      display="flex"
    >
      <img src={image.imageUrl} alt={image.title} width="100%" />
    </Box>
    <Box
      height="100%"
      width="50%"
      borderRadius="small"
      align="center"
      margin="large"
      display="flex"
    >
      <Table>
        <TableBody>
          {Object.entries(image).map(([key, value]) => (
            <TableRow>
              <TableCell whiteSpace="normal">{key}</TableCell>
              <TableCell whiteSpace="normal">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Box>
);

export default GalleryObject;
