import authFetch from "../utils/axiosAuthfetch"
import {useMutation , useQueryClient} from "@tanstack/react-query"
import { toast } from 'react-hot-toast';
const useQueryDelete = (endpoint  , key ) => {
    const queryClient = useQueryClient();
    const {isError , mutate:deleteIteam , isLoading} = useMutation({
        mutationFn: async (id) => await authFetch.delete(`/${endpoint}/${id}` ),
        onSuccess:(response) => {
            console.log(response);
            queryClient.invalidateQueries({queryKey:[`${key}`]})
            toast.success("تم الحذف بنجاح")
        } ,
        onError:(error) => {
            console.log(error);
            
            const errorMessage = error.response?.data?.message || error.message || "An error occurred";

            // Display the error message using toast
            toast.error(errorMessage);

        }
    })

  return{ 
 isError , isLoading , deleteIteam
}
}

export default useQueryDelete