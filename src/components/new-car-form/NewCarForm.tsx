import {FC} from "react";
import Form from "next/form";
import './NewCarForm.scss';

const NewCarForm: FC = () => {
    return (
        <Form action={'/new-car'} className='new-car-form'>
            <input type="text" name='brand' placeholder='brand' minLength={1} maxLength={20} required />
            <input type="number" name='price' min={1} max={1000000} placeholder='price' required />
            <input type="number" name='year' min={1990} max={2024} placeholder='year' required />
            <button>Post car</button>
        </Form>
    );
};

export default NewCarForm;