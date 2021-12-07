import Box from '@kiwicom/orbit-components/lib/Box';
import Pagination from '@kiwicom/orbit-components/lib/Pagination';
import { NavigateFunction } from 'react-router';
import { useNavigate } from 'remix';

type Props = {
    pageCount: number;
    page: number;
    toUrl: string;
}

const loadPage = (toUrl: string, selectedPage: number, navigate: NavigateFunction) => {
  navigate(`${toUrl}?page=${selectedPage}`);
};

const Paging = ({ pageCount, page, toUrl }: Props) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Pagination
        pageCount={pageCount}
        selectedPage={page}
        onPageChange={selectedPage => loadPage(toUrl, selectedPage, navigate)}
      />
    </Box>
  );
};

export default Paging;
