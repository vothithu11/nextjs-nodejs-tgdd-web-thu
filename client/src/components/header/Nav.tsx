import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AddressForm from './AddressForm';
import Search from '../Search';

function Nav() {
    return (
        <nav className="w-full h-11 py-4">
            <ul className="w-full h-11 p-2.5 text-sm center">
                <li className="">
                    <a>
                        <img src="/image/logo.png" alt="logo" className="w-40 h-8" />
                    </a>
                </li>
                <li className="text-xs ">
                    <a>
                        <button className="text-xs space-x-2 bg-[#FFBC06] h-12 px-2 ">
                            <span>Xem giá tồn kho, tại:</span>
                            <FontAwesomeIcon icon={faSortDown} className="" />
                            <div className="font-bold">Đà Nẵng</div>
                        </button>
                    </a>
                </li>
                <li className="">
                    <Search text={'Bạn tìm gì ...'} positonCustom={'top-[30%] right-0'} />
                </li>
                <li className="text-xs bg-[#FFBC06] h-12 px-2 center">
                    <a>
                        Tài khoản &<br /> Đơn hàng
                    </a>
                </li>
                <li className="text-xs h-11">
                    <a className="">
                        <button className=" bg-[#FFBC06] h-full px-2 space-x-2">
                            <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                            <span>Giỏ hàng</span>
                        </button>
                    </a>
                </li>
                <li className="">
                    <a>24h Công nghệ</a>
                </li>
                <li className="">
                    <a>Hỏi đáp</a>
                </li>
                <li className="">
                    <a>Game App</a>
                </li>
                {/* <AddressForm /> */}
            </ul>
        </nav>
    );
}

export default Nav;
