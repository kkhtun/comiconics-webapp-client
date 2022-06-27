import React, { createContext, useEffect, useState } from "react";

const LoaderContext = createContext({});
function LoaderContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [timeoutLoading, setTimeoutLoading] = useState(false);

    useEffect(() => {
        let timeout;
        if (loading === true) {
            setTimeoutLoading(true);
        }
        if (loading === false) {
            timeout = setTimeout(() => {
                setTimeoutLoading(loading);
                clearTimeout(timeout);
            }, 100);
        }
        return () => clearTimeout(timeout);
    }, [loading]);

    return (
        <LoaderContext.Provider
            value={{
                loading: timeoutLoading,
                setLoading,
                setLoadingInstant: setTimeoutLoading,
            }}
        >
            {children}
        </LoaderContext.Provider>
    );
}

export { LoaderContextProvider, LoaderContext };
