import Box from '@kiwicom/orbit-components/lib/Box';
import Pagination from '@kiwicom/orbit-components/lib/Pagination';
import { useNavigate, useSearchParams } from 'remix';

type Props = {
    pageCount: number;
    page: number;
    toUrl: string;
}

const Paging = ({ pageCount, page, toUrl }: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <Box>
      <Pagination
        pageCount={pageCount}
        selectedPage={page}
        onPageChange={selectedPage => {
          searchParams.delete('page');
          searchParams.append('page', selectedPage.toString());
          navigate(`${toUrl}?${searchParams}`);
        }}
      />
    </Box>
  );
};

export default Paging;
