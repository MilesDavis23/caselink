import { getRole } from "../../../../functions/role check/getRole";
/* This function should return a link based on the role */

const getLinkBasedOnRole = (cookie) => {
    const isLawyer = getRole(cookie);

    if (isLawyer) {
        return `/lawyer/case-page`
    } else {
        return `/person/case-page`
    };
};


export {
    getLinkBasedOnRole
};