import React from 'react';
import MultiRangeSlider from './MultiSlider';
const PriceRange = ({value, changePrice}) => { 
  console.log(changePrice());
  return (
    <div>
      <MultiRangeSlider
        value={value}
        min={0}
        max={1000}
        onChange={() => changePrice(value)}
        //onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
};

export default PriceRange