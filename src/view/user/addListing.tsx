import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CarDetails from '@/shared/CarDetails'
import React, { useState } from 'react'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import TextareaField from './components/TextareaField'
import { Checkbox } from '@/components/ui/checkbox'


const AddListing: React.FC = () => {
    const [formData, setFormData] = useState<Record<string, any>>([]);

    const handleInputChange = (name: string, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        console.log(formData);
    }

    const onSubmit = (e:any) => {
        // e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <Header />

            <div className='px-10 md:px-20 my-10'>
                <h2 className='font-bold text-4xl text-center'>Add New Listing</h2>

                <form action="" className='p-10 border rounded-xl mt-10'>
                    {/* car details  */}
                    <div>
                        <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {CarDetails.CarDetails.map((item, index) => (
                                <div key={index}>
                                    <label htmlFor="" className='text-sm'>{item?.label} {item.required && <span className='text-red-700'>*</span>}</label>
                                    {item?.fieldType == 'text' || item?.fieldType == 'number' ? <InputField item={item} handleInputChange={handleInputChange} />
                                        : item?.fieldType == 'dropdown' ? <DropdownField item={item} handleInputChange={handleInputChange} />
                                            : item?.fieldType == 'textarea' ? <TextareaField item={item} handleInputChange={handleInputChange} />

                                                : null}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* features list  */}
                    <br />
                    <hr />
                    <div>
                        <h2 className='font-medium text-xl my-6'>Features</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3'>
                            {CarDetails.features.map((item, index) => (
                                <div key={index} className='flex gap-2 items-center'>
                                    {item?.fieldType == 'checkbox' ? <Checkbox id={`${index}`} onCheckedChange={(value) => handleInputChange(item.name, value)} /> : null}
                                    <label htmlFor={`${index}`}>{item.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* car images */}

                    <button type="submit" onClick={(e) => onSubmit(e)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>

                </form>
            </div>

            <Footer />
        </>
    )
}

export default AddListing
