import React from 'react';
import './Content.scss';
function Content() {
    return (
        <div className='content'>
            <div className='left'>
                <h1>Yeezy</h1>
                <h1>700</h1>
                <h1>v3</h1>
                <div className='d-flex'>
                    <button className='buyNowBtm'
                    > Buy now <img className='ml-20' src=' /images/left-arrow.png'></img></button>
                </div>
            </div>
            <div className='center d-flex'>
                <div className='image-overlapping'>
                    <img className='bg' width={500}
                        height={300} src='/images/adidas-bg.png'></img>
                    <img className='shoe' width={500}
                        height={360} src='/images/bg-shoe.png'></img>
                </div>
                <div className='prices'>
                    <h3>3500 $</h3>
                    <h2>2500 $</h2>
                </div>
            </div>
            <div className='right'>
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

export default Content;