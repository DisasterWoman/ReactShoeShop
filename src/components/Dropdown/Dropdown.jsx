import React from 'react';
import './Dropdown.scss';
import axios from 'axios';

function Dropdown({ selected, setSelected }) {
    const [isAcitve, setIsActive] = React.useState(true);
    const [options, setOptions] = React.useState([]);
    const [brands, setBrands] = React.useState([]);

    const size = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46
    ];

    React.useEffect(() => {
        axios.get('http://localhost:3001/options')
            .then((res) => {
                setOptions(res.data)
                // console.log(res.data)
            });
        axios.get('http://localhost:3001/brands')
            .then((res) => {
                setBrands(res.data)
                console.log(res.data)
            });
    }, [])

    const onClickIcon = () => {
        setIsActive(!isAcitve);
    }

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
                    {options.map((option, index) => (
                        <div className='dropdown-item'
                            key={index}
                            onClick={(e) => {
                                setSelected(option);
                                //setIsActive(false);
                            }}
                        >
                            <label className='label'>
                                <input className='label_checkbox' type='checkbox'></input>
                                <span className='label_text'>
                                    <span className='label_check'>
                                        <img className='icon' src='/images/checkbox.svg' width={10} height={10}></img>
                                    </span>
                                </span>
                            </label>
                            {option}
                        </div>
                    ))}
                </div>
            )}
            {isAcitve && (
                <div className='brand-content'>
                    <h5>Brands</h5>
                    {brands.map((brand, index) => (
                        <div className='dropdown-brand'   
                            key={index} >
                                <label className='label'>
                                    <input className='label_checkbox' type='checkbox'></input>
                                    <span className='label_text'>
                                        <span className='label_check'>
                                            <img className='icon' src='/images/checkbox.svg' width={10} height={10}></img>
                                        </span>
                                    </span>
                                </label>
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
                            <div className='size-box d-flex justify-center align-center' key={index}>
                                {num}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className='sneakers-social d-flex justify-center'>
                <div className='socialBtn '>
                    <img src='/images/phone.png' alt='phone' width={18} height={18}></img>
                </div>
                <div className='socialBtn'>
                    <img src='/images/hearts.png' alt='phone' width={18} height={18}></img>
                </div>
                <div className='socialBtn'>
                    <img src='/images/message.png' alt='phone' width={18} height={18}></img>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;