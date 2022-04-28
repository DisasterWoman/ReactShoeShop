import React from 'react'

function Exclusive({image, name, priceBefore,price }) {
    
  return (
      <div className='exclusiveCard mb-20'>
          <img className='exclusive-item ml-20' src={image} width={150} height={150}
          ></img>
          <div className="d-flex  align-center ">
              <div className="box d-flex justify-between " >
                  <div className='box-info m-10'>
                      <p>{name}</p>
                      <p className='price'>{price} $ <span>{priceBefore} $</span></p>
                  </div>
                  <img className='cart mt-20 mr-10' src='/images/ccart.png' width={20} height={20}></img>
              </div>
          </div>
      </div>
  )
}

export default Exclusive