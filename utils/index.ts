import { manufacturers } from "@/constants";
import { CarProps, FilterProps } from "@/types";
import { type } from "os";

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, year, model, limit, fuel} = filters;
    const headers = {
        'X-RapidAPI-Key': 'd17a246e91msh1c32c158debf2eep11143ejsn5d40cbb421d7',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 24; //Base rental price per day in dollars
    const mileageFactor = 0.1; //Additional rate per mile driven
    const ageFactor = 0.05; //Additional rate per year of vehicle age
    
    //calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear()-year) * ageFactor;

    //calculate total rental rate per day
    const rentalRateperDay = basePricePerDay + mileageRate + ageRate;
    return rentalRateperDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?:string) => {
    const url = new URL('https://cars-by-api-ninjas.p.rapidapi.com/getimage');
     const {make, year, model} = car;
     url.searchParams.append('customer', 'hrjavascript-mastery');
     url.searchParams.append('make', make);
     url.searchParams.append('modelFamily', model.split('') [0]);
     url.searchParams.append('ZoomType', 'fullscreen');
     url.searchParams.append('modelYear', `${year}`);
     url.searchParams.append('angle', `${angle}`);

     return `${url}`;
 }
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
           searchParams.set('type', value)
           const newPathname = `${window.location.pathname}?${searchParams.toString()}`
           return newPathname;
}