import ProductsPage from '@/components/productsPage/ProductsPage';

const PhoneProducts = async (props) => {
    const ram = props?.searchParams.ram || '';
    const brand = props?.searchParams.brand || '';
    const type = props?.searchParams.type || '';
    const screen = props?.searchParams.screen || '';
    const storage = props?.searchParams.storage || '';
    const charger = props?.searchParams.charger || '';
    const price = props?.searchParams.price || '';
    const res = await fetch(
        `http://localhost:5000/posts?brand=${brand}&ram=${ram}&type=${type}&screen=${screen}&storage=${storage}&charger=${charger}&price=${price}`,
        { cache: 'no-store' },
    );

    const data = await res.json();
    console.log('check data new', data);

    return (
        <div>
            <ProductsPage data={data} />
        </div>
    );
};

export default PhoneProducts;
