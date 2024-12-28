import authFetch from "../utils/axiosAuthfetch"
import {useQuery } from "@tanstack/react-query"
const useQuerygetiteams = (endpoint  , key  , params) => {
    
    const {isError , data, isLoading} = useQuery({
            queryKey:[`${key}` , params],
        queryFn: async () => await authFetch(`/${endpoint}/` , {params} ),
     
    })
  return{ 
 isError , isLoading , data
}
}

export default useQuerygetiteams