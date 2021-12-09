import Box from '@kiwicom/orbit-components/lib/Box';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Table, { TableBody, TableCell, TableRow } from '@kiwicom/orbit-components/lib/Table';
import { FC } from 'react';
import { Exhibition } from '../types/apiTypes';

type Props = {
    exhibition: Exhibition;
}

const ExhibitionObject: FC<Props> = ({ exhibition }) => (
  <Box display="flex" margin="medium" padding="medium" direction="column">
    <Table>
      <TableBody>
        <TableRow key="title">
          <TableCell align="left" whiteSpace="normal">Title</TableCell>
          <TableCell align="right" whiteSpace="normal">{exhibition.title}</TableCell>
        </TableRow>
        <TableRow key="dated">
          <TableCell align="left" whiteSpace="normal">Exhibition began</TableCell>
          <TableCell align="right" whiteSpace="normal">{new Date(exhibition.begindate).toDateString()}</TableCell>
        </TableRow>
        <TableRow key="department">
          <TableCell align="left" whiteSpace="normal">Exhibition ended</TableCell>
          <TableCell align="right" whiteSpace="normal">{new Date(exhibition.enddate).toDateString()}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <ButtonLink href={`/gallery?exhibitionId=${exhibition.id}`} contentAlign="center">Show gallery</ButtonLink>
  </Box>
);

export default ExhibitionObject;
