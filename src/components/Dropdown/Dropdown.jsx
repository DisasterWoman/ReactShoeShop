import React from 'react';
import './Dropdown.scss';
import axios from 'axios';
import { GlobalContext } from '../../App';
import { Link } from "react-router-dom";


function Dropdown({ selected, setSelected}) {
    const [isAcitve, setIsActive] = React.useState(true);

    const [brands, setBrands] = React.useState([]);

    const size = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46
    ];
    const options = ["Sneakers ", "Clothes", "Accessories"];



    React.useEffect(() => {
        axios.get('http://localhost:3001/brands')
            .then((res) => {
             setBrands(res.data)
            });
    }, []);

    const onClickIcon = () => {
        setIsActive(!isAcitve);
    };
    return (
        <div className='dropdown'>
            <div className='catalog d-flex align-center justify-between p-10'>
                <p>{selected}</p>
                <img
                    className='arrow'
                    src={isAcitve ? '/images/down-arrow-catalog.svg' : '/images/right-arrow-catalog.svg'}
                    onClick={onClickIcon}
                    alt='down-icon'
                    width={30}
                    height={30}></img>
            </div>
            {isAcitve && (
                <div className='dropdown-content'>
                    <h5>Category</h5>
                    <Link to='/accessories'>
                        <div className='dropdown-item'
                            onClick={(event) => {
                                setSelected("Accessories");
                                //setIsActive(false);
                            }}
                            >
                            Accessories
                        </div>
                    </Link>
                    <Link to='/clothes'>
                        <div className='dropdown-item'
                            onClick={(event) => {
                                setSelected("Accessories");
                                //setIsActive(false);
                            }}
                            >
                            Clothes
                        </div>
                    </Link>
                </div>
            )}
            {isAcitve && (
                <div className='brand-content'>
                    <h5>Brands</h5>
                    {brands.map((brand, index) => (
                        <div className='dropdown-brand ml-10'   
                            key={index} >
                            {brand}
                        </div>
                    ))}
                </div>
            )}
            {isAcitve && (
                <div className='size-content'>
                    <h5>Size</h5>
                    <div className='d-flex justify-column flex-wrap'>
                        {size.map((num, index) => (
                            <div className='size-box d-flex justify-center align-center ' key={index}>
                                {num}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown;