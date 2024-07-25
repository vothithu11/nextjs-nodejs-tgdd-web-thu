'use client';
import ProductDetailLayout from './layout/ProductDetailLayout';
import StarRating from './StarRating';
import { FormatPrice } from '@/datas/covertData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { increment } from '@/components/counter/counterSlice';

const ProductDetail = ({ detailData }) => {
    const dispatch = useDispatch();
    const handleBuyNow = () => {
        dispatch(increment(detailData));
    };
    const handleAddToCart = () => {
        dispatch(increment(detailData));
    };
    console.log('data phone', detailData.category);

    return (
        <ProductDetailLayout>
            <div className="border-b-2 border-gray-100 py-3 space-y-2 text-[#288AD6]">
                <div className="flex gap-4">
                    <h4>{detailData.category == 'phone' ? 'Điện thoại' : 'Laptop'} </h4>
                    <span className="text-base items-center text-gray-500">{'>'}</span>
                    <h4>
                        {detailData.category == 'phone' ? 'Điện thoại' : 'Laptop'} {detailData.brand}
                    </h4>
                </div>
                <div className="flex gap-2 items-center max-lg:hidden">
                    <h2 className="text-2xl font-semibold text-black">{detailData.title}</h2>
                    <StarRating rating={detailData.rate} />
                    <span>đánh giá</span>
                </div>
            </div>
            <div className="grid grid-cols-5 space-x-4 mt-4 ">
                <div className="col-span-3 space-y-4 max-lg:col-span-5">
                    <img src={detailData.image} className="h-[50vh] center-x mx-auto max-xl:h-[20vh] " />
                    <p className="text-center text-[#288AD6] ">Xem tất cả các điểm nổi bật</p>
                    <div className="grid grid-cols-6 center-x mx-auto">
                        <img src={detailData.image} className="w-[8%] h-[8%]" />
                        <img src={detailData.image} className="w-[8%] h-[8%]" />
                        <img src={detailData.image} className="w-[8%] h-[8%]" />
                    </div>
                    <div className="border-2 border-gray-200 rounded-md grid grid-cols-2 p-4 gap-4 max-lg:text-xs">
                        <p className="border-b-2 border-gray-200 ">
                            Hư gì đổi nấy <strong>12 tháng</strong> tại 2983 siêu thị toàn quốc{' '}
                            <span className="text-[#288AD6]">(miễn phí tháng đầu) </span>
                        </p>
                        <p className="border-b-2 border-gray-200">
                            Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng{' '}
                            <span className="text-[#288AD6]">Xem địa chỉ bảo hành </span>
                        </p>
                        <p className="">Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</p>
                    </div>
                    <div className="space-y-8 text-xl">
                        <h3 className="font-semibold">Thông tin sản phẩm</h3>
                        <p className="justify-between text-lg text-justify max-lg:text-base">{detailData.desc}</p>
                        <img src={detailData.image} className="h-[50vh] center-x mx-auto max-xl:h-[20vh]" />
                    </div>
                </div>
                <div className="col-span-2 space-y-4 max-lg:col-span-5">
                    <div className="space-y-2  px-2 justify-center">
                        <h2 className="text-2xl font-semibold text-black flex justify-center max-lg:text-lg">
                            {detailData.title}
                        </h2>
                        <h4 className="font-bold p-2 text-[#288AD6] bg-[#F1F1F1]">
                            Giá sốc{' '}
                            <span className="text-red-700 font-normal ">
                                <FontAwesomeIcon icon={faFire} style={{ color: '#f4013e' }} />:
                            </span>
                        </h4>
                        <p className="text-red-700 font-bold p-2">{FormatPrice(detailData.salePrice)} đ</p>
                        <h4 className="font-bold text-[#288AD6] bg-[#F1F1F1] p-2">Giá gốc:</h4>
                        <p className="line-through text-gray-500 p-2">{FormatPrice(detailData.originalPrice)} đ</p>
                        <div className="space-x-4 center-x max-lg:space-x-1">
                            <Link href="/cart">
                                <button onClick={handleBuyNow} className="cart-btn">
                                    MUA NGAY
                                </button>
                            </Link>
                            <button onClick={handleAddToCart} className="cart-btn">
                                THÊM VÀO GIỎ HÀNG
                            </button>
                        </div>
                    </div>
                    <div className="space-y-4 max-lg:hidden">
                        <h2 className="text-2xl font-semibold text-black flex justify-center">Cấu hình</h2>
                        <div className=" space-y-4 px-2 [&>*:nth-child(odd)]:bg-[#F1F1F1] [&>*:nth-child(odd)]:p-2  [&>*:nth-child(even)]:bg-white  [&>*:nth-child(even)]:p-2 ">
                            <p>Màn hình: {detailData.screen}</p>
                            <p>Camera: {detailData.camera} MP</p>
                            <p>Ram: {detailData.ram} GB</p>
                            <p>Dung lượng lưu trữ: {detailData.storage} GB</p>
                            <p>
                                Pin, Sạc: {detailData.battery} {detailData.category == 'laptop' ? 'tiếng' : 'mAh'},{' '}
                                {detailData.charger} W
                            </p>
                            <p>Hãng: {detailData.brand}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ProductDetailLayout>
    );
};

export default ProductDetail;
