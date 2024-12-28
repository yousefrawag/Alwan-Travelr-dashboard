/* eslint-disable no-unused-vars */
import authFetch from "../utils/axiosAuthfetch"
import {useMutation , useQueryClient} from "@tanstack/react-query"
import { toast } from 'react-hot-toast';
const useQueryadditeam = (endpoint  , key ) => {
    const queryClient = useQueryClient();
    const {isError , mutate:addIteam , isLoading} = useMutation({
        mutationFn: async (data) => await authFetch.post(`/${endpoint}` , data),
        onSuccess:(response) => {
            queryClient.invalidateQueries({queryKey:[`${key}`]})
          
        } ,
        onError:(error) => {
            console.log(error);
            
       

        }
    })
  return{ 
 isError , isLoading , addIteam
}
}

export default useQueryadditeam