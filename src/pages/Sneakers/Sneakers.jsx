import React from 'react'
import { Link } from "react-router-dom";
import './Sneakers.scss';
import { GlobalContext } from '../../App';
import Exclusive from '../../components/EcxlusiveCard/Exclusive';
import Dropdown from '../../components/Dropdown/Dropdown';


function Sneakers() {
    const [value, setValues] = React.useState('');
    const { exItems } = React.useContext(GlobalContext);
    const [selected, setSelected] = React.useState("Catalog");


    const resetInputField = () => {
        return setValues("");
    };
  return (
      <div className='sneakers-wrap ml-50 mr-50'>
          <div className='search-header d-flex align-center justify-between '>
              <Link to='/' >
                  <img className='logo' alt='logo' src='/images/logo.png' width={220} height={70} ></img>
              </Link>
                  <div className="search-container d-flex align-center justify-between mb-40">
                  <div className='search-block d-flex'>
                      <img className='mr-20 mt-10 mb-5' src='images/search.svg' width={12} height={13} ></img>
                      <input placeholder='Search...'
                          value={value}
                          onChange={(event) => setValues(event.target.value)
                          }
                      ></input>
                      {value && (<img
                          onClick={resetInputField}
                          className='mr-5 mt-10 mb-5 remove'
                          src='/images/remove-btn.svg'
                          width={12} height={13}
                      ></img>)}
                  </div>
            </div>
              <div className='cartBtn'>
                  <img src='/images/ccart.png' width={20} height={20}></img>
              </div>
    </div>
    <div className='sneaker-content d-flex justify-between'>
              {/* custom dropdown menu */}
              <Dropdown selected={selected} setSelected={setSelected} />
              <br />
              <br />
              <br />
              <div className='card-items d-flex justify-around flex-wrap ml-20'>
                  {exItems
                      .filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))
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
          
    </div>

  )
}

export default Sneakers;