import DealsLayout from '@/components/layout/DealsLayout';

const FlashSaleDeals = ({ dataFlashSale }) => {
    return (
        <DealsLayout
            image={'/image/flashsaledeals.png'}
            btn={false}
            promo={false}
            dealsList={dataFlashSale}
            background={'bg-[#D91D03]'}
            bgImage={'none'}
            moreInfo={true}
        ></DealsLayout>
    );
};

export default FlashSaleDeals;
