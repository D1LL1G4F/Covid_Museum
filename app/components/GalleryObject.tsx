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
  columnClassName: string;
  imageClassName: string;
  textClassName: string;
};

const ImageWrapper = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const GalleryObject: FC<Props> = ({
  image, columnClassName, imageClassName, textClassName,
}) => (
  <Box className={columnClassName}>
    <Box className={imageClassName}>
      <ImageWrapper src={image.primaryimageurl ?? '/no-image.png'} alt={image.title} />
    </Box>
    <Box className={textClassName}>
      <Box>
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
      </Box>
      <Box>
        <ButtonLink href={`/gallery/detail/${image.id}`}>Details</ButtonLink>
      </Box>
    </Box>
  </Box>
);

export default GalleryObject;
