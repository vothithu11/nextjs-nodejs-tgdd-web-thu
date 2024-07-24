import Header from '@/components/header/Header';
import Banner from '@/sections/Banner/Banner';
import CateFuture from '@/sections/CateFuture/CateFuture';
import Promo from '@/sections/Promo';
import Footer from '@/components/footer/Footer';
import FlashSaleDeals from '@/sections/Deals/FlashSaleDeals/FlashSaleDeals';
import PromotionDeals from '@/sections/Deals/PromotionDeals/PromotionDeals';

export default async function Home() {
    const res = await fetch('http://localhost:5000/posts');
    const dataPost = await res.json();
    const resPromotion = await fetch('http://localhost:5000/posts?isPromotion=true');
    const dataPromotion = await resPromotion.json();
    const dataPromotionRadom = dataPromotion.slice(0, 10);
    const valueStart = Math.floor(Math.random() * 10);
    const dataFlashSale = dataPost.slice(valueStart, valueStart + 10);
    return (
        <main className="relative bg-[#f3efef]">
            <Header />
            <section className="padding">
                <Banner />
            </section>
            <section className="padding">
                <FlashSaleDeals dataFlashSale={dataFlashSale || []} />
            </section>
            <section className="padding">
                <PromotionDeals dataPromotionRadom={dataPromotionRadom || []} />
            </section>
            <section className="padding max-lg:hidden">
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
