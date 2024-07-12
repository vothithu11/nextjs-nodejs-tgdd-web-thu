import Image from 'next/image';
import Header from '@/components/header/Header';
import Banner from '@/sections/Banner/Banner';
import CateFuture from '@/sections/CateFuture/CateFuture';
import Promo from '@/sections/Promo';
import Footer from '@/components/footer/Footer';
import FlashSaleDeals from '@/sections/Deals/FlashSaleDeals/FlashSaleDeals';
import PromotionDeals from '@/sections/Deals/PromotionDeals/PromotionDeals';

export default function Home() {
    return (
        <main className="relative bg-[#f3efef]">
            <Header />
            <section className="padding">
                <Banner />
            </section>
            <section className="padding">
                <FlashSaleDeals />
            </section>
            <section className="padding">
                <PromotionDeals />
            </section>
            <section className="padding">
                <CateFuture />
            </section>
            <section className="padding">
                <Promo />
            </section>
            <section className="bg-slate-50">
                <Footer />
            </section>
        </main>
    );
}
