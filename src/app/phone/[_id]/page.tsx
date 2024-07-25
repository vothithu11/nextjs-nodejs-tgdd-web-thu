import ProductDetail from '@/components/ProductDetail';
import { url } from '@/datas/data';
const PhoneProduct = async (props) => {
    const _id = props?.params?._id;
    const res = await fetch(`${url}/${_id}`);
    const detailData = await res.json();

    return <ProductDetail detailData={detailData} />;
};

export default PhoneProduct;
