import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const ProductButtonFeature = ({ placeholder }) => {
    return (
        <div className="center p-2 m-2 border-2 rounded-md text-xs ">
            <span className="p-0 m-0">{placeholder}</span>
            <FontAwesomeIcon icon={faSortDown} className="" />
        </div>
    );
};

export default ProductButtonFeature;
