import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [query, setQuery] = useState([]);
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const response = await axios.get(url);
                setQuery(response.data);
            } catch (err) {
                console.error("fetching data", err);
            }
        };

        fetchingData();
    }, [url]);

    return query;
}

export default useFetch;