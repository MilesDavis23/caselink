import decodeToken from "../handle token/decodeToken";
import getToken from "../handle token/ getToken";


/* If it's a person, return a bool */
const getRole = (cookie) => {
    const jwToken = getToken(cookie);
    const payload = decodeToken(jwToken);
    if (payload.role === 'lawyer') { /* Check for lawyer, return true  */
        return true;
    } else {
        return false;
    }
};

export {
    getRole
}