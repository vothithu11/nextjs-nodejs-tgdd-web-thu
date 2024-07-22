import ButtonBrandName from '../button/ButtonBrandName';
import ProductButtonFeature from '../button/ProductButtonFeature';

const CategoriesLayout = ({ filterData, onSelect, resetFilters }) => {
    const item1 = filterData[0].items;

    return (
        <div className="bg-[#f3efef] padding-y space-y-8">
            <div className="grid grid-cols-6 mb-2.5">
                {filterData.map((filter) => (
                    <ProductButtonFeature
                        key={filter.queryName}
                        filter={filter}
                        onSelect={onSelect}
                        resetFilters={resetFilters}
                    />
                ))}
            </div>
            <div className="grid grid-cols-8 gap-y-2">
                {item1.map((filter) => (
                    <ButtonBrandName
                        filter={filter}
                        key={filter.name}
                        onSelect={onSelect}
                        resetFilters={resetFilters}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesLayout;
