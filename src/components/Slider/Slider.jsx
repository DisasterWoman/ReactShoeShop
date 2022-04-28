import React from 'react';
import './Slider.scss'
import {GlobalContext} from '../../App.js'
function Slider({ title, imageUrl, priceBefore, price}) {

  return (
      <div className='elements'>
              <div className='carousel-card d-flex align-center justify-between' >
                  <img alt='image' className='m-10 mr-20' width={160} height={90} src={imageUrl}></img>
                  <div className='info m-10'>
                      <h5 className='brand'>{title}</h5>
                      <div className='prices'>
                      <h3>{priceBefore} $</h3>
                          <h2>{price} $</h2>
                      </div>
                  </div>
              </div>
          </div>
  )
}

export default Slider;
