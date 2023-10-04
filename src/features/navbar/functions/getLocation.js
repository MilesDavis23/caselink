import { useLocation } from 'react-router-dom';

const useGetPageTitle = () => {
    const location = useLocation();
    const pathName = location.pathname;

    switch(pathName) {
        // Lawyer routes
        case '/lawyer':
        case '/lawyer/browse-cases':
            return 'Browse Cases';
        case '/lawyer/my-cases':
        case '/lawyer/my-cases/':
            return 'My Cases';
        case '/lawyer/lawyer-profile':
            return 'Profile Page';
        case '/lawyer/notifications':
            return 'Notifications';
        case '/lawyer/case-page/:caseId':
            return 'Individual Case';
        case '/lawyer/send-offer-case-page':
            return 'Send Offer';
        case '/lawyer/active-case-page':
            return 'Active Case';
        case '/lawyer/home-page':
            return 'Home Page';

        // Person routes
        case '/person':
        case '/person/make-a-case':
            return 'Make a Case';
        case '/person/offer-received':
            return 'Received Offers';
        case '/person/my-cases':
            return 'My Cases';
        case '/person/active-case-page':
            return 'Active Case';
        case '/person/person-profile':
            return 'Profile Page';
        case '/person/notifications-page':
            return 'Notifications';
        case '/person/case-page/:caseId':
            return 'Individual Case';
        case '/person/home-page':
            return 'Home Page';

        // Default
        default:
            return 'Case'; // You can adjust this to any default title you prefer
    }
}

export {
    useGetPageTitle
};