import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'


const page = () => {
  return (
    <div>
      <Navbar/>

      <Hero/>
      <div className='flex justify-center mt-5 mb-16'>    

        <div className="ml-6 p-3 text-center  w-80  max-h-96  rounded-md  bg-[#FF00E5] text-[#e8e6e1]  font-semibold  inline-block">
          <section className=' underline-offset-1	 font-extrabold text-2xl text-black'>Portfolio</section>
          <p> &quot; This is my portfolio  &quot; ; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat voluptatibus placeat dolores quidem. Commodi excepturi mollitia dolore nemo, maxime deleniti velit distinctio.</p>
            </div>
        <div className="ml-6 p-3   w-80 max-h-96   bg-[#FF00E5] text-[#e8e6e1] font-semibold inline-block text-center rounded-md" >
          <section className='font-extrabold text-2xl text-black'>About us</section>
          <h3> &quot; Hey there my name is Talha and i am a frontend developer &quot; </h3>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid lorem12 repellat voluptatibus placeat dolores quidem. Commodi excepturi mollitia dolore nemo,maxime deleniti velit distinctio.</p>
            </div>
            </div> 

      <Footer/>
      
    </div>

  )
}

export default page
