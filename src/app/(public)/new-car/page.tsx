import {FC} from "react";
import NewCarForm from "@/components/new-car-form/NewCarForm";
import './new-car-page.scss';

const NewCarPage: FC = async () => {

    return (
        <div className='new-car-page'>
            <h2>New car page</h2>
            <NewCarForm />
        </div>
    );
};

export default NewCarPage;