import React from "react";
import "./Accessories.scss";
import Exclusive from "../../components/EcxlusiveCard/Exclusive";
import axios from "axios";
import { Pagination } from "../../components/Pagination/Pagination";
import Dropdown from "../../components/Dropdown/Dropdown";


function Accessories({ selected, setSelected }) {
  
  const [accessories, setAccessories] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);
  const [value, setValues] = React.useState("");

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onChangeInput = (event) => {
    setValues(event.target.value);
  };
  const resetInputField = () => {
    return setValues("");
  };

  React.useEffect(() => {
    loadAccessories();
  }, []);

  const loadAccessories = async () => {
    axios.get(" http://localhost:3001/accessories").then((res) => {
      setAccessories(res.data);
    });
  };
  return (
    <div className="accessories-content">
      <div className="search-header d-flex align-center justify-center ">
        <div className="search-container  mb-25">
          <div className="search-block d-flex align-center justify-center">
            <img
              className="mr-20 mt-10 mb-10"
              src="images/search.svg"
              width={12}
              height={13}
            ></img>
            <input
              placeholder="Search..."
              value={value}
              onChange={onChangeInput}
            ></input>
            {value && (
              <img
                onClick={resetInputField}
                className="mr-5 mt-10 mb-5 remove"
                src="/images/remove-btn.svg"
                width={12}
                height={13}
              ></img>
            )}
          </div>
        </div>
      </div>

      <div className="accessories d-flex justify-center align-center flex-wrap m-10">
        {accessories
          .filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))
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
        totalPosts={accessories.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Accessories;
