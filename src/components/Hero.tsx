import React from 'react'
import Search from './Search'

const Hero: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col items-center p-10 py-20 gap-6 h-[550px] w-full bg-[#eefcf8]'>
                <h2 className='text-lg'>Find cars for sale and for rent near you</h2>
                <h2 className='md:text-[30px] lg:text-[60px] font-bold'>Find Your Dream Car</h2>
                <Search/>
                <img src="/images/png-porche.png" alt="" className='mt-10' />
            </div>
        </div>  
    )
}

export default Hero
