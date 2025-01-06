 import { apiCommon } from "./ApiInstance"

 export const getAllProduct = async () => {
    const {data} =  await apiCommon.get('/products');
    return data ;
 }

 export const deletProduct = async (id) => {
   const {data} = await apiCommon.delete(`/products/${id}`);
   return data ;
 }
 export const addProduct = async (proudctObj) => {
   const {data} = await apiCommon.post('/products' , proudctObj )
   return data ;
 }

 export const findByID = async(id) => {
  const {data} = await apiCommon.get(`/products/${id}`)
  return data ;
 }

 export const updateProduct = async (id ,productObj) => {
  const {data} = await apiCommon.put(`/product/${id}`,productObj);
  return data ;
 }

 