import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addProduct, deletProduct, findByID, getAllProduct, updateProduct } from "../api/ProductApi"

export const useAllProducts = () => {
    return useQuery({
        queryKey : ['products'] ,
        queryFn : getAllProduct
    })
}

export const useDeleteProducts = () => {
    const uqc = useQueryClient();
    return useMutation({
        mutationFn : deletProduct  ,
        onSuccess : () => {
            uqc.invalidateQueries(['products']);
        }
    })
}

export const useFindById =(id) => {
     return useQuery({
        queryKey : ['product' , id] , 
        queryFn : () => findByID(id) ,
        enabled: !!id
    })
}
export const useAddProduct = () => {
     const uqc = useQueryClient();
     return useMutation({
        mutationFn : addProduct ,
        onSuccess : () => {
            uqc.invalidateQueries(['products']);
        }
     })
}

export const useUpdateProduct = () => {
    const uqc = useQueryClient();
    return useMutation({
        mutationFn : updateProduct ,
        onSuccess : () => {
            uqc.invalidateQueries(['products']);
        }
    })
}