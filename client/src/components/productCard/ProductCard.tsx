import Link from 'next/link';
import StarRating from '../StarRating';
import { FormatPrice } from '@/datas/covertData';

function ProductCard({ product, bgImage, moreInfo }) {
    return (
        <div className={`py-8 px-4 bg-slate-100 m-2 rounded-md ${bgImage}`}>
            <Link href={`phone/${product._id}`}>
                <img src={product.image} alt="sp" width={210} height={193} />
                <div className="grid justify-items-center gap-1 mt-2">
                    <p>{product.title}</p>
                    {/* <p>{iphone && 'Online giá quả rẻ'}</p> */}

                    <p className="">
                        {product.isPromotion && (
                            <div className="flex space-x-2">
                                <span className="line-through text-gray-500">
                                    {FormatPrice(product.originalPrice)} <span>đ</span>
                                </span>
                                <br />
                                <span className=" p-1 rounded-md bg-[#FFF0E9]">
                                    {product.promotionPercent}
                                    <span>%</span>
                                </span>
                            </div>
                        )}
                    </p>
                    <p className="text-red-600 font-bold">
                        {FormatPrice(product.salePrice)} <span>đ</span>
                    </p>
                    <p>
                        <StarRating rating={product.rate} />
                    </p>
                    {moreInfo && (
                        <ul className="grid justify-items-start gap-2 p-2 text-sm list-disc">
                            <li>{product.screen}</li>
                            <li>
                                <span>RAM: </span>
                                {product.ram}
                            </li>

                            <li>Pin: {product.battery}</li>
                        </ul>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
