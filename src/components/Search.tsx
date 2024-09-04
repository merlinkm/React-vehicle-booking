import React from 'react'
import Dropdown from './ui/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Data from '../shared/Data';

// library.add(faMagnifyingGlass);
const Search: React.FC = () => {
    const CarOptions = [
        { value: "new", label: "New" },
        { value: "old", label: "Old" },
    ]
    const CarMakes = Data.CarMakes.map((maker, index) => (
        { 'value': maker.name, 'label': maker.name }
    ))
    const CarPricing = Data.Pricing.map((price, index) => (
        { 'value': price.amount, 'label': price.amount }
    ))

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };


    return (
        <div className='flex p-2 md:px-5 md:bg-white rounded-md md:rounded-full flex-col md:flex-row gap-5 py-3 items-center w-[60%] '>
            <Dropdown className="outline-none md:border-none w-full shadow-none" options={CarOptions} onChange={handleSelectChange} placeholder="Select a Car" />
            <span className="text-gray-300 hidden md:block">|</span> {/* Separator */}
            <Dropdown className="outline-none md:border-none w-full shadow-none" options={CarMakes} onChange={handleSelectChange} placeholder="Select a Brand" />
            <span className="text-gray-300 hidden md:block">|</span> {/* Separator */}
            <Dropdown className="outline-none md:border-none w-full shadow-none" options={CarPricing} onChange={handleSelectChange} placeholder="Select Price Range" />
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl bg-blue-500 rounded-full p-2 text-white hover:scale-105 transition-all cursor-pointer' />
                {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            </div>
        </div>
    )
}

export default Search
