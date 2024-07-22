import Image from 'next/image';
import Header from '@/components/header/Header';
import Banner from '@/sections/Banner/Banner';
import CateFuture from '@/sections/CateFuture/CateFuture';
import Promo from '@/sections/Promo';
import Footer from '@/components/footer/Footer';
import FlashSaleDeals from '@/sections/Deals/FlashSaleDeals/FlashSaleDeals';
import PromotionDeals from '@/sections/Deals/PromotionDeals/PromotionDeals';

export default async function Home() {
    const res = await fetch('http://localhost:5000/posts');
    const data = await res.json();
    const res2 = await fetch('http://localhost:5000/posts?isPromotion=true');
    const data2 = await res2.json();
    const dataRandom = data.slice(0, 10);
    const randomStart = Math.floor(Math.random() * 10);
    const dataRandom2 = data2.slice(randomStart, randomStart + 10);
    console.log('check radom data2:', dataRandom2);

    return (
        <main className="relative bg-[#f3efef]">
            <Header />
            <section className="padding">
                <Banner />
            </section>
            <section className="padding">
                <FlashSaleDeals dataRandom2={dataRandom2 || []} />
            </section>
            <section className="padding">
                <PromotionDeals dataRandom={dataRandom || []} />
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
