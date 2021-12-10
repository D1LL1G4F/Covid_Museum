import Stack from '@kiwicom/orbit-components/lib/Stack';
import Pagination from '@kiwicom/orbit-components/lib/Pagination';
import { FC, useState } from 'react';
import { ImagesEntity } from '../types/objectAPI';

type Props = {
    images: ImagesEntity[];
}

const ImageList: FC<Props> = ({ images }) => {
  const [pageNum, setPageNum] = useState(0);

  return (
    <Stack align="center" direction="column">
      <img src={images[pageNum]?.baseimageurl ?? '/no-image.png'} style={{ maxWidth: '100%' }} alt={images[pageNum].imageid.toString()} />
      <div>
        <Pagination
          selectedPage={pageNum + 1}
          pageCount={images?.length ?? 1}
          onPageChange={pg => setPageNum(pg - 1)}
        />
      </div>
    </Stack>
  );
};

export default ImageList;
