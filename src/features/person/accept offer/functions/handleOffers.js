import axios from "axios";

const acceptOffer = async (userId) => {
    try {
        const response = await axios.put('http://localhost:3002/person/update-offer-status', {
            userId,
            status: 'accepted'
        });
        console.log(response, response.data)
        console.log('Offer accepted:', response.data);
    } catch (error) {
        console.error('Error accepting offer:', error);
    }
};

const declineOffer = async (userId) => {
    try {
        const response = await axios.put('http://localhost:3002/person/update-offer-status', {
            userId,
            status: 'declined'
        });
        console.log('Offer declined:', response.data);
    } catch (error) {
        console.error('Error declining offer:', error);
    }
};

export {
    declineOffer, 
    acceptOffer
}