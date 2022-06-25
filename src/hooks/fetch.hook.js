import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoaderContext } from "../contexts/loader.context";

export function useFetchList({ url, initialQueries = {} }) {
    const { setLoading } = useContext(LoaderContext);
    const [queries, setQueries] = useState({
        limit: 5,
        skip: 0,
        ...initialQueries,
    });
    const [response, setResponse] = useState({});
    useEffect(() => {
        if (url) {
            const fetchList = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(url, {
                        params: queries,
                    });
                    if (response.status === 200) {
                        setResponse(response.data);
                    }
                    setLoading(false);
                } catch (err) {
                    const msg =
                        err.response?.data?.message || "Something went wrong";
                    toast(msg);
                    console.error(msg);
                    setLoading(false);
                }
            };
            fetchList();
        }
    }, [queries, url, setLoading]);

    return { response, setQueries };
}
