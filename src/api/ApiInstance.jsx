import axios from "axios";

export const apiCommon = axios.create({
    baseURL : 'https://fakestoreapi.com' , 
    timeout : 10000 , 
    headers : {'Content-Type' : 'application/json'}
})