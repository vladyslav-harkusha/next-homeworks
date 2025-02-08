'use client';

import {FC} from "react";
import Form from "next/form";
import './NewCarForm.scss';
import {postCarAction} from "@/server-actions/newCarSaveAction";
import {useActionState} from "react";
import Link from "next/link";


const NewCarForm: FC = () => {
    const [formState, formAction] = useActionState(postCarAction, null);

    if (formState) return (
        <>
            <h2>Car was posted</h2>
            <Link href={'/cars'} className='link-to-cars'>Link to cars page {'>>'}</Link>
        </>
    )

    return (
        <Form action={formAction} className='new-car-form'>
            <input type="text" name='brand' placeholder='brand' minLength={1} maxLength={20} required />
            <input type="number" name='price' min={1} max={1000000} placeholder='price' required />
            <input type="number" name='year' min={1990} max={2024} placeholder='year' required />
            <button>Post car</button>
        </Form>
    );
};

export default NewCarForm;