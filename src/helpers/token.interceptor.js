import axios from "axios";

// Add a request interceptor
export const useInterceptor = () => {
    axios.interceptors.request.use(
        function (config) {
            // Do something before request is sent
            let token = localStorage.getItem("COMICONICS_TOKEN");
            if (token) {
                config.headers.Authorization = `Bearer ${localStorage.getItem(
                    "COMICONICS_TOKEN"
                )}`;
            }
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );
};
