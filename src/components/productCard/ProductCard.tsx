import Link from 'next/link';
import StarRating from '../StarRating';
import { FormatPrice } from '@/datas/covertData';

function ProductCard({ product, bgImage, moreInfo }) {
    return (
        <div className={`py-8 px-4 bg-slate-100 m-2 rounded-md ${bgImage} max-lg:`}>
            <Link href={`/${product.category}/${product._id}`}>
                <img src={product.image} alt="sp" width={210} height={193} />
                <div className="grid justify-items-center gap-1 mt-2">
                    <p className="max-lg:text-sm center-x">{product.title}</p>
                    {/* <p>{iphone && 'Online giá quả rẻ'}</p> */}

                    <p className="">
                        {product.isPromotion && (
                            <div className="flex space-x-2">
                                <span className="line-through text-gray-500 max-lg:text-xs">
                                    {FormatPrice(product.originalPrice)} <span>đ</span>
                                </span>
                                <br />
                                <span className=" p-1 rounded-md bg-[#FFF0E9] max-lg:hidden">
                                    {product.promotionPercent}
                                    <span>%</span>
                                </span>
                            </div>
                        )}
                    </p>
                    <p className="text-red-600 font-bold max-lg:font-normal">
                        {FormatPrice(product.salePrice)} <span>đ</span>
                    </p>
                    <p>
                        <StarRating rating={product.rate} />
                    </p>
                    {moreInfo && (
                        <ul className="grid justify-items-start gap-2 p-2 text-sm list-disc max-lg:hidden">
                            <li>{product.screen}</li>
                            <li>
                                <span>RAM: </span>
                                {product.ram} GB
                            </li>

                            <li>
                                Pin: {product.battery} {product.category == 'laptop' ? 'tiếng' : 'mAh'}
                            </li>
                        </ul>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
