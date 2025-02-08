import axios from "axios";
import {ICar} from "@/models/ICar";
import {INewCarData} from "@/models/INewCarData";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1/cars',
    headers: { 'Content-Type': 'application/json' },
});

export const getAllCars = async (): Promise<ICar[]> => (await axiosInstance.get<ICar[]>('')).data;

export const postCar = async (newCar: INewCarData): Promise<ICar> => {
    const response = await axiosInstance.post('', newCar);
    return response.data;
};