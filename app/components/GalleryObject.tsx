import Box from '@kiwicom/orbit-components/lib/Box';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Table, {
  TableBody,
  TableRow,
  TableCell,
} from '@kiwicom/orbit-components/lib/Table';

import { FC } from 'react';
import styled from 'styled-components';
import { Object } from '../types/apiTypes';

type Props = {
  image: Object;
  direction: 'row' | 'row-reverse';
};

const ImageWrapper = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const GalleryObject: FC<Props> = ({ image, direction }) => (
  <Box
    height="400px"
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
      overflow="hidden"
    >
      <ImageWrapper src={image.primaryimageurl} alt={image.title} />
    </Box>
    <Box
      height="100%"
      width="50%"
      borderRadius="small"
      align="center"
      justify="center"
      margin="large"
      display="flex"
      direction="column"
    >
      <Table>
        <TableBody>
          <TableRow key="title">
            <TableCell whiteSpace="normal">Title</TableCell>
            <TableCell whiteSpace="normal">{image.title}</TableCell>
          </TableRow>
          <TableRow key="dated">
            <TableCell whiteSpace="normal">Dated</TableCell>
            <TableCell whiteSpace="normal">{image.dated}</TableCell>
          </TableRow>
          <TableRow key="department">
            <TableCell whiteSpace="normal">Department</TableCell>
            <TableCell whiteSpace="normal">{image.department}</TableCell>
          </TableRow>
          <TableRow key="division">
            <TableCell whiteSpace="normal">Division</TableCell>
            <TableCell whiteSpace="normal">{image.division}</TableCell>
          </TableRow>
          <TableRow key="period">
            <TableCell whiteSpace="normal">Period</TableCell>
            <TableCell whiteSpace="normal">{image.period}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ButtonLink disabled href={`/gallery/${image.id}`} contentAlign="center">Details</ButtonLink>
    </Box>
  </Box>
);

export default GalleryObject;
