import SearchPage from '@/components/SearchPage';

const Search = async (props) => {
    const keyword = props?.searchParams.keyword || '';
    const res = await fetch(`http://localhost:5000/posts?keyword=${keyword}`);

    const data = await res.json();

    return <SearchPage data={data} />;
};

export default Search;
