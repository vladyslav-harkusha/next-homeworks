'use client';

import {FC} from "react";
import Form from "next/form";
import './NewCarForm.scss';
import {postCarAction} from "@/server-actions/newCarSaveAction";
import {useActionState} from "react";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {newCarValidator} from "@/validators/new-car.form-validator";

export interface INewCarFormProps {
    brand: string;
    price: number;
    year: number;
}

const NewCarForm: FC = () => {
    const [formState, formAction] = useActionState(postCarAction, null);

    const {
        register,
        formState: { errors, isValid },
    } = useForm<INewCarFormProps>({
        mode: "all",
        resolver: joiResolver(newCarValidator),
    });

    if (formState) return (
        <>
            <h2>Car was posted</h2>
            <Link href={'/cars'} className='link-to-cars'>Link to cars page {'>>'}</Link>
        </>
    )

    return (
        <Form action={formAction} className='new-car-form'>
            <label>
                <p>Add brand:</p>
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" {...register('brand')} placeholder='brand'/>
            </label>

            <label>
                <p>Add price:</p>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="number" {...register('price')} placeholder='price'/>
            </label>

            <label>
                <p>Add year:</p>
                {errors.year && <span>{errors.year.message}</span>}
                <input type="number" {...register('year')} placeholder='year'/>
            </label>

            <button disabled={!isValid}>Post car</button>
        </Form>
    );
};

export default NewCarForm;