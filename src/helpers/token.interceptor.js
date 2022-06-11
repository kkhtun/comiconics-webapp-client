import axios from "axios";

// Add a request interceptor
export const useInterceptor = () => {
    axios.interceptors.request.use(
        function (config) {
            config.headers.Authorization = `Bearer ${localStorage.getItem(
                "COMICONICS_TOKEN"
            )}`;
            // Do something before request is sent
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );
};
