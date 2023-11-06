/* functions for the filtering the case data for browse cases: */


const sortCases = (cases, order) => {
    return [...cases].sort((a, b) => {
        if (order === 'latest'){
            console.log('the function is triggered the latest',order, new Date(a.created_at), new Date(b.created_at))
            return new Date(b.created_at) - new Date(a.created_at); 
        } else {
            return new Date(a.created_at) - new Date(b.created_at);
        }
    });
};

export {
    sortCases
}