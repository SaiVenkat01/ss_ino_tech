import React from 'react'
import avatarImg from "../../assets/logo_no_bg_crop.png"
import TextChange from '../TextChange'
const Home = () => {
  return (
    <div className='text-black flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                <TextChange/>
            </h1>
            <p className='text-sm md:text-2xl tracking-tight'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam incidunt pariatur dolorem eius aut culpa sit corporis! 
                Ab magnam dolor excepturi autem reprehenderit explicabo possimus vitae, 
                corrupti voluptatibus labore ducimus facere aspernatur!
            </p>
            <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 d:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-300'>
                Contact Me
            </button>
        </div>
        <div><img className='' src={avatarImg} alt=""/></div>
    </div>
  )
}

export default Home