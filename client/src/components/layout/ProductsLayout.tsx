import Header from '../header/Header';
import Footer from '../footer/Footer';
import BannerSlider from '../BannerSlider';
import CategoriesLayout from './CategoriesLayout';

const ProductsLayout = ({ filterData, children, onSelectFeature, resetFilters }) => {
    return (
        <main className="relative">
            <Header />
            <section className="padding mt-4 pb-8">
                <BannerSlider />
            </section>
            <section className="padding mt-10 max-lg:mt-2">
                <CategoriesLayout filterData={filterData} onSelect={onSelectFeature} resetFilters={resetFilters} />
            </section>
            <section className="padding">{children}</section>

            <section className="bg-slate-50 border-t-2 mt-11">
                <Footer />
            </section>
        </main>
    );
};

export default ProductsLayout;
