import Table, {
  TableBody, TableCell, TableHead, TableRow,
} from '@kiwicom/orbit-components/lib/Table';
import { FC } from 'react';
import { DetailObject } from '../types/objectAPI';

type Props = {
  info: DetailObject
}

const AsideInfo : FC<Props> = ({ info }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell as="td" align="center" verticalAlign="middle">Artist</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>{info.people ? info.people[0].displayname : 'Unknown'}</TableCell>
      </TableRow>
      {info.people
            && (
              <>
                <TableRow>
                  <TableCell whiteSpace="normal">Gender</TableCell>
                  <TableCell whiteSpace="normal">{info.people[0].gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell whiteSpace="normal">Birthplace</TableCell>
                  <TableCell whiteSpace="normal">{info.people[0].birthplace ?? 'unknown'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell whiteSpace="normal">Culture</TableCell>
                  <TableCell whiteSpace="normal">{info.people[0].culture}</TableCell>
                </TableRow>
              </>
            )}
    </TableBody>
    <TableHead>
      <TableRow>
        <TableCell as="td" align="center" verticalAlign="middle">Basic Info</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {info.titlescount > 1 && info.titles
          && (
            <TableRow>
              <TableCell scope="row">Alternative Title</TableCell>
              <TableCell whiteSpace="normal">{info.titles[1].title}</TableCell>
            </TableRow>
          )}
      {info.period && (
        <TableRow>
          <TableCell scope="row">Period</TableCell>
          <TableCell whiteSpace="normal">{info.period}</TableCell>
        </TableRow>
      )}
      {info.places && (
        <TableRow>
          <TableCell>Created in</TableCell>
          <TableCell whiteSpace="normal">{info.places.find(place => place.type === 'Creation Place')?.displayname ?? 'Unknown'}</TableCell>
        </TableRow>
      )}
      <TableRow>
        <TableCell scope="row">Century</TableCell>
        <TableCell whiteSpace="normal">{info.century}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell scope="row">Culture</TableCell>
        <TableCell whiteSpace="normal">{info.culture}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell scope="row">Dimensions</TableCell>
        <TableCell whiteSpace="normal">{info.dimensions}</TableCell>
      </TableRow>
    </TableBody>
    <TableHead>
      <TableRow>
        <TableCell align="center" verticalAlign="middle">Harvard Museum</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell whiteSpace="normal">Department</TableCell>
        <TableCell whiteSpace="normal">{info.department}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell whiteSpace="normal">Division</TableCell>
        <TableCell whiteSpace="normal">{info.division}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell whiteSpace="normal">Contact</TableCell>
        <TableCell whiteSpace="normal">{info.contact}</TableCell>
      </TableRow>

    </TableBody>
  </Table>
);

export default AsideInfo;
