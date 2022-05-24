import React from 'react';
import './Exclusive.scss';
function Exclusive({image, name, priceBefore,price }) {
    const [liked, setLiked] = React.useState(false);
    const [added, setAdded] = React.useState(false);
    const onHeart = () => {
        setLiked(!liked);
    }
    const onAdd = () => {
        setAdded(!added);
    }

  return (
      <div className='exclusiveCard'>
      <div className='d-flex heart'>
              <img 
               width={20}
               height={20} 
               onClick={onHeart}
               src={liked ? '/images/heart-liked.svg' : '/images/heart-unliked.svg'}
               
               />
               
      </div>
          <img className='exclusive-item ml-20' src={image} width={150} height={150}
          ></img>
          <div className="d-flex  align-center ">
              <div className="box d-flex justify-between " >
                  <div className='box-info m-10'>
                      <p>{name}</p>
                      <p className='price'>{price} $ <span>{priceBefore} $</span></p>
                  </div>
                  <img 
                     className='cart mt-20 mr-10'
                     onClick={onAdd}
                     src={added ? '/images/added.svg' : '/images/ccart.png'}
                     width={20}
                     height={20}/>
              </div>
          </div>
          
      </div>
  )
}

export default Exclusive