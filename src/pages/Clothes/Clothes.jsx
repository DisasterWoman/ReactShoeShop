import React, { useState, useEffect } from "react";
import FilterPanel from "../../components/common/FilterPanel/FilterPanel";
import "./Clothes.scss";
import List from "./List/ListItem";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import { GlobalContext } from "../../App";

function Clothes() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);

  const [filteredItems, setFilteredItems] = useState([]);

  const [items, setItems] = useState([]);
  const [brands, setBrands] = useState([]);

  const [sections, setSections] = useState([
    { id: 1, checked: false, label: "Men" },
    { id: 2, checked: false, label: "Women" },
    { id: 3, checked: false, label: "Unisex" },
  ]);

  const [resultsFound, setResultsFound] = useState(true);

  React.useEffect(() => {
    loadAccessories();
  }, []);

  const loadAccessories = async () => {
    axios.get(" http://localhost:3001/accessories").then((res) => {
      setItems(res.data);
      setFilteredItems(res.data);
    });
    axios.get(" http://localhost:3001/brands").then((res) => {
      setBrands(res.data);
    });
  };

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const stateList = sections;
    const changeCheckedClothes = stateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSections(changeCheckedClothes);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
    console.log(value)
  };

  const applyFilters = () => {
    //choose sex filter
    const selectedSex = sections
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (selectedSex.length === 0) {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items
          .filter((item) => selectedSex.includes(item.sex.toLowerCase()))
      );
    }
    //choose brand filter

    //price range filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    const selectedRange = items.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice);
      setFilteredItems(selectedRange);
      !selectedRange.length ? setResultsFound(false) : setResultsFound(true);
  };
  useEffect(() => {
    applyFilters();
  }, [selectedCategory, sections, selectedPrice]);

  return (
    <div className="clothes">
      {/* Search Bar */}
      <SearchBar />
      <div className="clothes_wrap">
        {/* Filter Panel */}
        <div className="clothes_panel-wrap">
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            changeChecked={handleChangeChecked}
            brands={brands}
            filteredItems={filteredItems}
            sections={sections}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
        {/* List & Empty View */}
        <div className="clothes_list">
          <List items={filteredItems} />
        </div>
      </div>
    </div>
  );
}

export default Clothes;
