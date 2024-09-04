import React from 'react'
import { Car } from '../shared/FakeData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faGasPump, faGauge, faGaugeSimpleHigh, faGears } from '@fortawesome/free-solid-svg-icons';
import { Separator } from './ui/separator';

interface CarItemProps {
  car: Car; // Car type defined above
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <div className='rounded-xl border bg-white hover:shadow-md cursor-pointer'>
      <h6 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h6>
      <img src={car?.image} alt="" width={'100%'} height={200} className='rounded-xl' />
      <div className='p-4'>
        <h2 className='font-bold text-black text-lg mb-2 text-center'>{car.name}</h2>
        <hr />
        <div className='grid grid-cols-3 mt-5 mb-5'>
          <div className='flex flex-col text-center'>
            <FontAwesomeIcon icon={faGasPump} className='text-sm mb-2' />
            <h2 className='text-sm'>{car.miles} Miles</h2>
          </div>
          <div className='flex flex-col text-center'>
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className='text-sm mb-2' />
            <h2 className='text-sm'>{car.fuelType}</h2>
          </div>
          <div className='flex flex-col text-center'>
            <FontAwesomeIcon icon={faGears} className='text-sm mb-2' />
            <h2 className='text-sm'>{car.gearType}</h2>
          </div>
        </div>
        <Separator className='my-3' />
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-xl'>${car.price}</h2>
          <h2 className='text-blue-500 text-sm gap-2 items-center'>
            View Details <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </h2>

        </div>
      </div>
    </div>
  )
}

export default CarItem
