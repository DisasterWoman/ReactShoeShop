import React from 'react';
import './Advertisement.scss';
import Exclusive from '../EcxlusiveCard/Exclusive';
import { GlobalContext } from '../../App';
import Carousel, { consts } from 'react-elastic-carousel';



function Advertisement() {

 const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 600, itemsToShow: 3 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1000, itemsToShow: 5 },
    ];
 

     const { exItems } = React.useContext(GlobalContext);

    return (
        <div className='adds d-flex justify-center flex-wrap m-20'>
            <img src='/images/clothes.png' width={350} height={350}></img>
            <img src='/images/accessories-ad.png' width={350} height={350}></img>
            <img src='/images/top-brand-ad.png' width={350} height={350}></img>
            <div className='d-flex justify-center flex-wrap'>
                <img src='/images/lowPrice-add.png' width={350} height={180}></img>
                <img src='/images/sale-add.png' width={350} height={180}></img>
                <img src='/images/caps-add.png' width={350} height={180}></img>
                <div>
                </div>
            </div>
            <h2 className='exclusive m-20 d-block'>Exclusive Models</h2>
            <Carousel breakPoints={breakPoints}
                focusOnSelect={true}>
                {exItems.map((obj, index) => (
                    <Exclusive
                        key={index}
                        name={obj.name}
                        image={obj.image}
                        priceBefore={obj.priceBefore}
                        price={obj.price}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default Advertisement;