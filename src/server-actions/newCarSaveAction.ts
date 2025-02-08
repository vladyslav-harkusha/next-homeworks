'use server';

import {axiosInstance} from "@/services/cars.api.service";

export const postCarAction = async (prevState: any, formData: FormData) => {
    const newCar = {
        brand: formData.get('brand'),
        price: formData.get('price'),
        year: formData.get('year')
    }

    await axiosInstance.post('', newCar);

    return {
        ...prevState,
        data: newCar
    }
};