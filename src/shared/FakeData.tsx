import { faker } from '@faker-js/faker';

export interface Car {
    name: string;
    fuelType: string;
    model: string;
    type: string;
    image: string;
    miles: number;
    gearType: string;
    price: string;
}

function createRandomCarList():Car {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://www.autovista.in/assets/img/new_cars_colour_variants/xl6-colour-pearl-arctic-white.jpg',
        miles: 1000,
        gearType: 'Automatic',
        price: faker.finance.amount({ min: 20000, max: 40000 })

    }
}

const CarList = faker.helpers.multiple(createRandomCarList, {
    count: 7
})

export default { CarList }