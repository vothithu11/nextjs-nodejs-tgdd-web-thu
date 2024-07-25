import ProductsPage from '@/components/productsPage/ProductsPage';
import { filterDataLaptop } from '@/datas/data';
import { url } from '@/datas/data';

const LaptopProducts = async (props) => {
    const ram = props?.searchParams.ram || '';
    const brand = props?.searchParams.brand || '';
    const type = props?.searchParams.type || '';
    const screen = props?.searchParams.screen || '';
    const storage = props?.searchParams.storage || '';
    const charger = props?.searchParams.charger || '';
    const pricerange = props?.searchParams.pricerange || '';
    const demand = props?.searchParams.demand || '';
    const res = await fetch(
        `${url}?category=laptop&brand=${brand}&ram=${ram}&type=${type}&screen=${screen}&storage=${storage}&charger=${charger}&pricerange=${pricerange}&demand=${demand}`,
        { cache: 'no-store' },
    );

    const dataLaptop = await res.json();

    return (
        <div>
            <ProductsPage data={dataLaptop} filterData={filterDataLaptop} />
        </div>
    );
};

export default LaptopProducts;
