import decodeToken from "../handle token/decodeToken";
import getToken from "../handle token/ getToken";


const getUser = (cookie) => {
    const jwToken = getToken(cookie);
    const payload = decodeToken(jwToken);
    return payload
};

export {
    getUser
}