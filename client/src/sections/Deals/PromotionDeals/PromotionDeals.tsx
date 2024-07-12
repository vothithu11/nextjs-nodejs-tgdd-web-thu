import DealsLayout from '@/components/layout/DealsLayout';
import { prosTest } from '@/datas/data';

const PromotionDeals = () => {
    return (
        <DealsLayout
            image={'/image/promotiondeals.png'}
            btn={false}
            promo={false}
            dealsList={prosTest}
            background={'bg-[#920101]'}
            bgImage={'bg-dynamic'}
            moreInfo={false}
        ></DealsLayout>
    );
};

export default PromotionDeals;
