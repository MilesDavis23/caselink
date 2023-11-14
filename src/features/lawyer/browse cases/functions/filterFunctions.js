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

const filterByCategories = (cases, categoryInput) => {
    if (categoryInput.length < 1) return cases;
    const filteredCategories = cases.filter(caseItem => {
        let categories = [];

        try {
            categories = JSON.parse(caseItem.case_category);
            console.log('Parsed categories:', categories);
        } catch (error) {
            console.error('Parsing error for case_category:', caseItem.case_category, error);
            return false;
        }

        if (!Array.isArray(categoryInput)) {
            console.error('categoryInput must be an array.');
            return false;
        }

        const lowerCaseCategories = categories.map(c => c.toLowerCase());
        const lowerCaseCategoryInput = categoryInput.map(c => c.toLowerCase());

        console.log('Comparing categories:', lowerCaseCategories, 'with input:', lowerCaseCategoryInput);

        return lowerCaseCategories.some(category => lowerCaseCategoryInput.includes(category));
    });

    console.log('Filtered categories result:', filteredCategories);
    return filteredCategories;
};

const filterByTags = (cases, tagInput) => {
    if (tagInput.length < 1 || !tagInput) return cases;
    const filteredByTags = cases.filter(caseItem => {
        let caseTags = [];

        try {
            if (caseItem.Tags) caseTags = JSON.parse(caseItem.Tags);
            console.log('Parse tags:', caseTags);
        } catch (error) {
            console.error('Parsing error for caseTags:' , caseItem.Tags);
            return false;
        }

        if (!Array.isArray(tagInput)) {
            console.error('categoryInput must be an array.');
            return false;
        }

        const lowerCaseTags = caseTags.map(c => c.toLowerCase());
        const lowerCaseTagInput = tagInput.map(c => c.toLowerCase());

        //console.log('Comparing categories:', lowerCaseTags, 'with input:', lowerCaseTagInput);

        return lowerCaseTags.some(tag => lowerCaseTagInput.includes(tag));

    });

    return filteredByTags

};

const searchCases = (cases, searchInput) => {
    if (searchInput.length === '') return cases;
    const queriedByText = cases.filter(caseItem => {
        let caseText = '';

        try {
            if (caseItem.detailed_description) {
                //let detailedDescription = JSON.parse(caseItem.detailed_description);
                caseText += caseItem.detailed_description;
            }
            if (caseItem.brief_description) {
                //let shortDescription = JSON.parse(caseItem.brief_description);
                caseText += caseItem.brief_description;
            }
        } catch (error) {
            console.error('Reading error for case texts:', caseItem.detailed_description,  caseItem.brief_description)
            return false;
        }

        const lowerCaseTexts = caseText.toLowerCase();
        const lowerCaseTextInput = searchInput.toLowerCase();

        return  lowerCaseTexts.includes(lowerCaseTextInput);
    })

    return queriedByText;
};

export { 
    sortCases, 
    filterByCategories,
    filterByTags, 
    searchCases
};







const test = 'Parsing error for caseTags:Filtered categories result:'
console.log(test.includes('r c'))