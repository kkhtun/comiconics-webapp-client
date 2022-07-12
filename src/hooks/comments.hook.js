import environment from "../environment";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useGetComments() {
    const [queries, setQueries] = useState({ limit: 3, skip: 0 });
    const [comicId, setComicId] = useState(null);
    const [response, setResponse] = useState({});
    useEffect(() => {
        if (comicId) {
            const fetchComments = async () => {
                let append = `?limit=${queries.limit}&skip=${queries.skip}`;
                const response = await axios.get(
                    `${environment.url}/api/v1/comics/${comicId}/comments${append}`
                );
                if (response.status === 200) {
                    setResponse(response.data);
                }
            };
            fetchComments().catch((err) => {
                const msg =
                    err.response?.data?.message || "Something went wrong";
                toast(msg);
                console.error(msg);
            });
        }
    }, [queries, comicId]);

    return { response, setQueries, setComicId };
}
