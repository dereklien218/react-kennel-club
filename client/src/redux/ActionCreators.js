import { baseUrl } from '../shared/baseUrl';


export const postRegistration = registration => () => {

    return fetch(baseUrl + 'registration', {
            method: "POST",
            body: JSON.stringify(registration),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => {
            console.log('Registration: ', response);
            alert('Thank you for your registration!\n' + JSON.stringify(response));
        })
        .catch(error => {
            console.log('post registration', error.message);
            alert('Your registration could not be submitted\nError: ' + error.message);
        });
};

export const postFeedback = feedback => () => {

    return fetch(baseUrl + 'feedback', {
            method: "POST",
            body: JSON.stringify(feedback),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => {
            console.log('Feedback: ', response);
            alert('Thank you for your feedback!\n' + JSON.stringify(response));
        })
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};