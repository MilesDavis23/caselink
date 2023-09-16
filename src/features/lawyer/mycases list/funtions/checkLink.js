import { useLocation } from "react-router-dom";

/* returns a boolean, if we are in /browse-cases */
const useIsFromBrowseCases = () => {
    const location = useLocation();
    return location.pathname.endsWith('/browse-cases');
};

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export {
    useIsFromBrowseCases,
    useQuery
};