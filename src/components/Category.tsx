import React from 'react'
import Data from '../shared/Data'

const Category: React.FC = () => {
    return (
        <div className='mt-20'>
            <h2 className='font-bold text-center text-3xl mb-6'>Browse By Type</h2>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            {Data.Category.map((category, index) => (
                <div key={index} className='border rounded-xl p-3 items-center flex flex-col hover:shadow-lg cursor-pointer'>
                    <img src={category.icon} alt="" width={35} height={35} />
                    <h4 className='mt-2'>{category.name}</h4>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Category
