import {FC} from "react";
import {getAllCars} from "@/services/cars.api.service";
import './CarsList.scss';

const CarsList: FC = async () => {
    const cars = await getAllCars();

    return (
        <ul className='cars-list'>
            {cars.map(({ id, brand }) => <li key={id} className='car-item'>{id}: {brand}</li>)}
        </ul>
    );
};

export default CarsList;