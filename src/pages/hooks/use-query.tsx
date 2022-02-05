// Grabs query parameter from url
import { useLocation } from "react-router-dom";

export const useQuery = (param: string) => {
    const search = useLocation().search;
    return new URLSearchParams(search).get(param);
};
