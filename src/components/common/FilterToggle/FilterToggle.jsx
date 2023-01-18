import React from "react";
import "./FilterToggle.scss";

const FilterToggle = ({ value, section, changeChecked }) => {
  const { checked, label, id } = section;

  return (
    <div className="">
      <div className="filter-toggle-wrap d-flex">
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={() => changeChecked(id)}
        />
        <label className="ml-5">{label}</label>
      </div>
    </div>
  );
};

export default FilterToggle;
