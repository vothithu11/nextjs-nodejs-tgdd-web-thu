import ButtonBrandName from '../button/ButtonBrandName';
import ProductButtonFeature from '../button/ProductButtonFeature';

const CategoriesLayout = ({ filterData }) => {
    const allImages = filterData[0].items.map((filter) => filter.image);
    const allPlaceholder = filterData.map((filter) => filter.placeholder);
    return (
        <div>
            <div className="grid grid-cols-8 mb-2.5">
                {allPlaceholder.map((placeholder) => (
                    <ProductButtonFeature placeholder={placeholder} key={placeholder + 1} />
                ))}
            </div>
            <div className="grid grid-cols-6 gap-y-2">
                {allImages.map((image) => (
                    <ButtonBrandName image={image} key={image + 1} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesLayout;
