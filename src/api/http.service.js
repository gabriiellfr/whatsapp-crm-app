// api/http.service.js
import http from './axios.service';

const get = (route, query = '') => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await http.get(route + query);
            resolve(response.data);
        } catch (error) {
            if (error.response) {
                reject(
                    new Error(
                        `GET request failed with status ${error.response.status}`,
                    ),
                );
            } else if (error.request) {
                reject(new Error('No response received from the server'));
            } else {
                reject(new Error('Error setting up the GET request'));
            }
        }
    });
};

const post = (route, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await http.post(route, data);
            resolve(response.data);
        } catch (error) {
            if (error.response) {
                if (error.response.data)
                    reject(new Error(`${error.response.data.message}`));

                reject(
                    new Error(
                        `POST request failed with status ${error.response.status}`,
                    ),
                );
            } else if (error.request) {
                reject(new Error('No response received from the server'));
            } else {
                reject(new Error('Error setting up the POST request'));
            }
        }
    });
};

const put = (route, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await http.put(route, data);
            resolve(response.data);
        } catch (error) {
            if (error.response) {
                reject(
                    new Error(
                        `PUT request failed with status ${error.response.status}`,
                    ),
                );
            } else if (error.request) {
                reject(new Error('No response received from the server'));
            } else {
                reject(new Error('Error setting up the PUT request'));
            }
        }
    });
};

const patch = (route, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await http.patch(route, data);
            resolve(response.data);
        } catch (error) {
            if (error.response) {
                reject(
                    new Error(
                        `PATCH request failed with status ${error.response.status}`,
                    ),
                );
            } else if (error.request) {
                reject(new Error('No response received from the server'));
            } else {
                reject(new Error('Error setting up the PATCH request'));
            }
        }
    });
};

const del = (route) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await http.delete(route);
            resolve(response.data);
        } catch (error) {
            if (error.response) {
                reject(
                    new Error(
                        `DELETE request failed with status ${error.response.status}`,
                    ),
                );
            } else if (error.request) {
                reject(new Error('No response received from the server'));
            } else {
                reject(new Error('Error setting up the DELETE request'));
            }
        }
    });
};

export { get, post, put, patch, del };
