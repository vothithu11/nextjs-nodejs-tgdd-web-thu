import Header from '../header/Header';
import Footer from '../footer/Footer';
import BannerSlider from '../BannerSlider';
import CategoriesLayout from './CategoriesLayout';

const ProductsLayout = ({ filterData, children }) => {
    return (
        <main className="relative bg-[#f3efef]">
            <Header />
            <section className="padding">
                <BannerSlider />
            </section>
            <section className="padding mt-10">
                <CategoriesLayout filterData={filterData} />
            </section>
            <section className="padding">{children}</section>

            <section className="bg-slate-50">
                <Footer />
            </section>
        </main>
    );
};

export default ProductsLayout;
