import DealsLayout from '@/components/layout/DealsLayout';

const FlashSaleDeals = ({ dataRandom2 }) => {
    return (
        <DealsLayout
            image={'/image/flashsaledeals.png'}
            btn={false}
            promo={false}
            dealsList={dataRandom2}
            background={'bg-[#D91D03]'}
            bgImage={'none'}
            moreInfo={true}
        ></DealsLayout>
    );
};

export default FlashSaleDeals;
