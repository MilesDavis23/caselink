import axios from "axios";

const acceptOffer = async (offerId, userId, caseId) => {
    try {
        const response = await axios.put('http://localhost:3002/person/update-offer-status', {
            offerId, 
            userId,
            caseId,
            status: 'active'
        });

        if (response.data.success) {
            alert(response.data.message);  // Display a simple alert with the message
        } else {
            alert('Failed to update offer status. Please try again.');
        }
        console.log('Offer accepted:', response.data);
    } catch (error) {
        console.error('Error accepting offer:', error);
    }
};

const declineOffer = async (offerId, userId, caseId) => {
    try {
        const response = await axios.put('http://localhost:3002/person/update-offer-status', {
            offerId,
            userId,
            caseId, 
            status: 'declined'
        });
        if (response.data.success) {
            alert(response.data.message);  // Display a simple alert with the message
        } else {
            alert('Failed to update offer status. Please try again.');
        }
        console.log('Offer declined:', response.data);
    } catch (error) {
        console.error('Error declining offer:', error);
    }
};

export {
    declineOffer, 
    acceptOffer
}