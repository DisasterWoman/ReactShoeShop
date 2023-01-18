import React, { useState, useEffect } from "react";
import Exclusive from "../../../components/EcxlusiveCard/Exclusive";
import { Pagination } from "../../../components/Pagination/Pagination";

const List = ({items}) => {

  const [postsPerPage] = React.useState(8);
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div>
      <div className="d-flex flex-row flex-wrap">
        {items
          .slice(indexOfFirst, indexOfLast)
          .map((obj, index) => (
          <Exclusive
            key={index}
            name={obj.name}
            image={obj.image}
            priceBefore={obj.priceBefore}
            price={obj.price}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        onArrow={setCurrentPage}
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </div>
  );
};

export default List;
