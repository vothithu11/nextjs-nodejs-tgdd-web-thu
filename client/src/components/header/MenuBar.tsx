import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SubMenuBar from './SubMenuBar';

function MenuBar({ menuBar }) {
    return (
        <section className="py-8 w-full h-11">
            <ul className="center text-sm">
                {menuBar.map((menu) => (
                    <a className="center space-x-3 ">
                        {/* relative of a*/}
                        <FontAwesomeIcon icon={menu.icon} />
                        <li key={menu.id}>{menu.title}</li>
                        {menu.completed && <FontAwesomeIcon icon={faSortDown} />}
                        {/* {menu.completed && <SubMenuBar />} */}
                    </a>
                ))}
            </ul>
        </section>
    );
}

export default MenuBar;
