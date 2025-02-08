import {FC} from "react";
import CarsList from "@/components/cars-list/CarsList";
import './cars-page.scss';

const CarsPage: FC = () => {


    return (
        <div className='cars-page'>
            <h2>Cars page</h2>
            <CarsList />
        </div>
    );
};

export default CarsPage;