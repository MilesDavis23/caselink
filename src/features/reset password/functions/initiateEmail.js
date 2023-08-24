

/* Trigger the process to: generate token, storing it in the database, sending email to user with the link:  */
async function initiatePasswordReset(setActiveStep, email) {
    try {
        const response = await fetch('http://localhost:3001/api/reset-password/password-reset', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        /* handle stepper: */
        if (data.success) {
            alert('Error, during sending e-mail.')
        } else {
            setActiveStep((prev) => prev + 1)
        }
    } catch (error) {
        console.error('Error initiating password reset: ')
    }
}

/* Handle the acutal password reset: */
async function handleResetPassword(setActiveStep, uniqueToken, password) {
    try {
        const response = await fetch('http://localhost:3001/api/reset-password/reset-password', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: uniqueToken, newPassword: password}),
        }); 

        const data = await response.json();
        if (response.status === 200) {
            setActiveStep((prev) => prev + 1);
        } else {
            alert(data.message || 'Please check if the given passwords are correct.')
        }
    } catch (error) {
        console.error('Error reseting the passwod:', error);
    }
}

export {
    initiatePasswordReset, 
    handleResetPassword
}