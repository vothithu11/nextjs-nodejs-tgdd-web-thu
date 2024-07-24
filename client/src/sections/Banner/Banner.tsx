import { bannerContent } from '@/datas/data';
import BannerContent from './BannerContent';
import BannerSlider from '@/components/BannerSlider';
function Banner() {
    return (
        <div className="w-full max-container bg-slate-50">
            <div className="relative flex-1 flex justify-center items-center">
                <img src="/image/banner-big.png" alt="banner" className="object-contain relative " />
                <div className="flex gap-4 absolute -bottom-[5%] z-5">
                    <BannerSlider />
                </div>
            </div>
            <div className="w-full center mt-28 gap-x-4 max-lg:grid max-lg:grid-cols-2 max-lg:mt-10">
                {bannerContent.map((value) => (
                    <BannerContent image={value.image} title={value.title} />
                ))}
            </div>
            <div className="w-full">
                <img src="/image/banner-footer.png" alt="banner" className="w-full my-10 max-lg:my-6" />
            </div>
        </div>
    );
}

export default Banner;
