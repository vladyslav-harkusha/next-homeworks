import {FC} from "react";
import NewCarForm from "@/components/new-car-form/NewCarForm";
import './new-car-page.scss';
import {SearchParams} from "next/dist/server/request/search-params";
import {postCar} from "@/services/cars.api.service";
import {INewCarData} from "@/models/INewCarData";

type Props = {
    searchParams: Promise<SearchParams>;
}

const NewCarPage: FC<Props> = async ({ searchParams }) => {
    const awaitedSP = await searchParams;


    // if (awaitedSP) {
    //     await postCar({ brand: awaitedSP.brand, price: awaitedSP.price, year: awaitedSP.year });
    // }


    return (
        <div className='new-car-page'>
            <h2>New car page</h2>
            <NewCarForm />
        </div>
    );
};

export default NewCarPage;