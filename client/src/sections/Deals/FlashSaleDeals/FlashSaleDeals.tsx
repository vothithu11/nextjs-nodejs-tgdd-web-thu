import DealsLayout from '@/components/layout/DealsLayout';
import { prosTest } from '@/datas/data';

const FlashSaleDeals = () => {
    console.log('prosTest:', prosTest);
    return (
        <DealsLayout
            image={'/image/flashsaledeals.png'}
            btn={false}
            promo={false}
            dealsList={prosTest}
            background={'bg-[#D91D03]'}
            bgImage={'none'}
            moreInfo={true}
        ></DealsLayout>
    );
};

export default FlashSaleDeals;
