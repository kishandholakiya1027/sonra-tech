import axios from "axios";

interface Api {
    url: string,
    method: string,
    data?: any | null
}

const api = (url: string, method: string, data: any | null) => {
    const instance = axios.create({
        baseURL: "https://www.googleapis.com/"
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 404) {
                return Promise.reject({
                    status: error.response.status,
                    message: error.response.data.message,
                });
            }
            return Promise.reject(error);
        }
    );

    const config = {
        url,
        method,
        data
    };

    return instance.request(config);
};

export default api;
