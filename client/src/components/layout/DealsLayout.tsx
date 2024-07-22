import Image from 'next/image';
import Promo from '@/sections/Promo';
import ProductCard from '../productCard/ProductCard';
import Button from '../button/Button';

function DealsLayout({ dealsList, image, promo, btn, background, bgImage, moreInfo }) {
    return (
        <div className={`my-14 ${background} w-full rounded-xl`}>
            <Image width={1354} height={500} src={image} alt="hinh-anh-highlights" />
            <div className="p-5">
                {promo && <Promo />}
                <div className="grid grid-cols-5">
                    {dealsList.map((deal) => (
                        <ProductCard product={deal} key={deal.id} bgImage={bgImage} moreInfo={moreInfo} />
                    ))}
                </div>
                {btn && <Button />}
            </div>
        </div>
    );
}

export default DealsLayout;
