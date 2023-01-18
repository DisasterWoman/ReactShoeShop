import React from 'react'

const CheckBoxFilter = ({brand}) => {
  return (
    <div>
      <div className="">
        <div className="filter-toggle-wrap d-flex">
          <input type="checkbox"/>
          <label className="ml-5">{brand}</label>
        </div>
      </div>
    </div>
  );
}

export default CheckBoxFilter