import React from "react";
import { Link } from "react-router-dom";
import "./Sneakers.scss";
import { GlobalContext } from "../../App";
import Exclusive from "../../components/EcxlusiveCard/Exclusive";
import Dropdown from "../../components/Dropdown/Dropdown";
import axios from "axios";
import { Pagination } from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";
function Sneakers({ active }) {
  
  const [value, setValues] = React.useState("");
  const { exItems, setExItems } = React.useContext(GlobalContext);
  const [selected, setSelected] = React.useState("Catalog");
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(6);

  const resetInputField = () => {
    return setValues("");
  };

  React.useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    setLoading(true);
    axios.get(`http://localhost:3001/exclusive`).then((res) => {
      setExItems(res.data);
    });
    setLoading(false);
  };

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  //  const currentPosts = exItems.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header active={active} />
      <div className="sneaker-wrapper">
        <div className="sneakers ml-50 mr-50 d-flex justify-between ">
          <Dropdown
            selected={selected}
            // options = {options}
            setSelected={setSelected}
          />
          <div className="search-wrapper">
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
                    onChange={(event) => setValues(event.target.value)}
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
            <div className="sneaker-content d-flex justify-between">
              <div className="card-items">
                {exItems
                  .slice(indexOfFirst, indexOfLast)
                  .filter((obj) =>
                    obj.name.toLowerCase().includes(value.toLowerCase())
                  )
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
            </div>
            <Pagination
              currentPage={currentPage}
              onArrow={setCurrentPage}
              postsPerPage={postsPerPage}
              totalPosts={exItems.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sneakers;
