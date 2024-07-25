import SearchPage from '@/components/SearchPage';
import { url } from '@/datas/data';

const Search = async (props) => {
    const keyword = props?.searchParams.keyword || '';
    const res = await fetch(`${url}?keyword=${keyword}`, { cache: 'no-store' });

    const data = await res.json();

    return <SearchPage data={data} />;
};

export default Search;
