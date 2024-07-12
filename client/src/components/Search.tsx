import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ text, positonCustom }) {
    return (
        <div className="center relative">
            <input type="text" placeholder={text} className="w-72 h-11 rounded focus:outline-none p-3 px-6 " />
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                // className={`absolute  top-[20%] `}
                className={`absolute ${positonCustom} w-[26px] h-[20px]`}
            />
        </div>
    );
}

export default Search;
