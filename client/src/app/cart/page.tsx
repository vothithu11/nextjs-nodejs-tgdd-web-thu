'use client';
import { useSelector } from 'react-redux';
import ProductCounter from '@/components/counter/ProductCounter';
import { FormatPrice } from '@/datas/covertData';

const CartPage = () => {
    const { value, product } = useSelector((state) => state.counter);

    return (
        <div className="">
            <h1 className="text-[#288AD6] font-bold text-xl center-x p-8">Giỏ hàng của bạn</h1>
            {product ? (
                <div key={product._id} className="grid grid-cols-3 border-b-2 mx-[30%] p-2 center shadow-xl">
                    <img src={product.image} alt={product.name} width="100px" />
                    <div className="space-y-2 ">
                        <h2>{product.title}</h2>
                        <p>Giá: {FormatPrice(product.salePrice)} đ</p>
                    </div>
                    <ProductCounter />
                </div>
            ) : (
                <p>Giỏ hàng của bạn trống</p>
            )}
        </div>
    );
};

export default CartPage;
