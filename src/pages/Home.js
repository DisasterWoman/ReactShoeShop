import React from 'react'
import Content from '../components/Content/Content'
import Carousel from 'react-elastic-carousel';
import Slider from '../components/Slider/Slider';
import Advertisement from '../components/Advertisement/Advertisement';
import { GlobalContext } from '../App';


function Home() {
    const { items } = React.useContext(GlobalContext);

    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
    ]
  return (
    <>
          <Content />
          <div className='d-flex flex-wrap align-center mb-30 m-20'>
              <Carousel
                  breakPoints={breakPoints}
                  focusOnSelect={true}
              >
                  {items.map((item, index) => (
                      <Slider
                          key={index}
                          title={item.title}
                          priceBefore={item.priceBefore}
                          price={item.price}
                          imageUrl={item.imageUrl}
                      />
                  ))}
              </Carousel>
          </div>
          <Advertisement />
    </>
  )
}

export default Home