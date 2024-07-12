import CategoriesLayout from '@/components/layout/CategoriesLayout';
import ProductsLayout from '@/components/layout/ProductsLayout';
import { filterData } from '@/datas/data';
const PhonePage = () => {
    return (
        <ProductsLayout filterData={filterData}>
            <span>hello</span>
        </ProductsLayout>
    );
};

export default PhonePage;
