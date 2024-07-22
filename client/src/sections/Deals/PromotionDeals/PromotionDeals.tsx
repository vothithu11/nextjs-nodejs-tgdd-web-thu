import DealsLayout from '@/components/layout/DealsLayout';
import { prosTest } from '@/datas/data';

const PromotionDeals = ({ dataRandom }) => {
    return (
        <DealsLayout
            image={'/image/promotiondeals.png'}
            btn={false}
            promo={false}
            dealsList={dataRandom}
            background={'bg-[#920101]'}
            bgImage={'bg-dynamic'}
            moreInfo={true}
        ></DealsLayout>
    );
};

export default PromotionDeals;
