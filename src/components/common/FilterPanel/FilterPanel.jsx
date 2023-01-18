import React, { useState } from "react";
import "./FilterPanel.scss";
import FilterToggle from "../FilterToggle/FilterToggle";
import CheckBoxFilter from "../CheckBoxFilter/CheckBoxFilter";
import PriceRange from "../PriceRangeSlider/PriceRange";

const FilterPanel = ({
  items,
  brands,
  sections,
  changeChecked,
  changePrice,
  selectedPrice,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClickIcon = () => {
    setIsOpen(!isOpen);
  };
  console.log();

  return (
    <div className="filter-panel mt-15">
      <div className="f-catalog" onClick={onClickIcon}>
        <p>Catalog</p>
        <div className={isOpen ? "caretRotate" : "caret"}></div>
      </div>
      {isOpen ? (
        <div>
          <div className="filter-group category d-flex">
            <p className="label">Category</p>
            {sections.map((section) => (
              <FilterToggle
                key={section.id}
                label={section.label}
                section={section}
                changeChecked={changeChecked}
              />
            ))}
          </div>
          <div className="filter-group filter-brands">
            <p className="brands">Brands</p>
            {brands.map((brand, index) => (
              <CheckBoxFilter key={index} items={items} brand={brand.name} />
            ))}
          </div>
          <div className="filter-group range">
            <p className="price-range">Price Range</p>
            <PriceRange value={selectedPrice} changePrice={changePrice} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterPanel;
