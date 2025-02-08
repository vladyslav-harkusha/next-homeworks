import axios from "axios";
import {ICar} from "@/models/ICar";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1/cars',
    headers: { 'Content-Type': 'application/json' },
});

export const getAllCars = async (): Promise<ICar[]> => (await axiosInstance.get<ICar[]>('')).data;
