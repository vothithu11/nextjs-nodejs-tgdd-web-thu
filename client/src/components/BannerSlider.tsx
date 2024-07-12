import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
function BannerSlider() {
    return (
        <div className="w-full center pb-3 space-x-2 -mb-14">
            <div className="w-10 h-10 p-3 rounded-full bg-slate-200 center ">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className=" grid grid-cols-2">
                <img src="/image/banner1.png" alt="banner" width={540} className="rounded" />
                <img src="/image/banner2.png" alt="banner" width={540} className="rounded" />
            </div>

            <div className="w-10 h-10 p-3 rounded-full bg-slate-200 center ">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
}

export default BannerSlider;
