import ProductDetail from '@/components/ProductDetail';
const PhoneProduct = async (props) => {
    const _id = props?.params?._id;
    const res = await fetch(`http://localhost:5000/posts/${_id}`);
    const detailData = await res.json();
    console.log('Fetched data:', detailData);

    return <ProductDetail detailData={detailData} />;
};

export default PhoneProduct;
