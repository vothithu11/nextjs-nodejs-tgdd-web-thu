import DealsLayout from '@/components/layout/DealsLayout';

const PromotionDeals = ({ dataPromotionRadom }) => {
    return (
        <DealsLayout
            image={'/image/promotiondeals.png'}
            btn={false}
            promo={false}
            dealsList={dataPromotionRadom}
            background={'bg-[#920101]'}
            bgImage={'bg-dynamic'}
            moreInfo={true}
        ></DealsLayout>
    );
};

export default PromotionDeals;
