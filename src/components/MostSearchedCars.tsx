import React from 'react'
import FakeData from '../shared/FakeData';
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const MostSearchedCars: React.FC = () => {
    return (
        <div className='mx-24 my-20'>
            <h2 className='text-3xl font-bold text-center mt-16 mb-7'>Most Searched Cars</h2>
            <Carousel>
                <CarouselContent>
                    {FakeData.CarList.map((car, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <CarItem car={car} key={index} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}

export default MostSearchedCars
