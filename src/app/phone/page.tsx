import ProductsPage from '@/components/productsPage/ProductsPage';
import { filterData } from '@/datas/data';
import { url } from '@/datas/data';

const PhoneProducts = async (props) => {
    const ram = props?.searchParams.ram || '';
    const brand = props?.searchParams.brand || '';
    const type = props?.searchParams.type || '';
    const screen = props?.searchParams.screen || '';
    const storage = props?.searchParams.storage || '';
    const charger = props?.searchParams.charger || '';
    const price = props?.searchParams.price || '';

    const res = await fetch(
        `${url}?category=phone&brand=${brand}&ram=${ram}&type=${type}&screen=${screen}&storage=${storage}&charger=${charger}&price=${price}`,
        { cache: 'no-store' },
    );

    const data = await res.json();

    return (
        <div>
            <ProductsPage data={data} filterData={filterData} />
        </div>
    );
};

export default PhoneProducts;
