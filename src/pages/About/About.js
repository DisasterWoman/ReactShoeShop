import React from 'react'
import './About.scss'
function About() {
  return (
    <div className='about-info m-30'>
      <h2>Little bit about our shop</h2>
      <div className='d-flex'>
      <div>
          <p>  My brother and I have been working since we were 11 years old.It all started as simple as possible, it was a family business.The most ordinary product, without any frills, and could not boast of luxurious geolocation.The first time their work, because it is necessary.And what are the other options ? Father by this one day, we had to be a crutch.</p>
          <p>A little later, they began to instill in themselves tastes for things: revealing / shoes, following all the fashionable news of their needs, occasionally indulging in something inherent and trendy.</p>
          <p>It soon became clear that you need to get even closer to this, and not just fill your wardrobe with a bunch of clothes, but other people who have undergone more affordable luxury, and even with excellent service.And now we are almost there! And it would be natural to have a couple of lines, but the essence of 14 years of hard work and nerves</p>
      </div>
          <img src='/images/aboutPic.jpg' width={550} height={400}></img>
      </div>
      <div className='labels d-flex flex-wrap m-20 justify-around'>
      <div className='label-wrap d-flex justify-center'>
          <img src='/images/adidas.svg' width={180}></img>
      </div>
      <div className='label-wrap d-flex justify-center'>
      <img src='/images/vans.svg' width={180}></img>
      </div>
      <div className='label-wrap d-flex justify-center'>
      <img src='/images/nike.svg' width={160}></img>
      </div>
      <div className='label-wrap d-flex justify-center'>
      <img src='/images/newBalance.svg' width={160}></img>
      </div>
      <div className='label-wrap d-flex justify-center'>
      <img src='/images/converse.svg' width={160}></img>
      </div>
      </div>
    </div>
  )
}

export default About;