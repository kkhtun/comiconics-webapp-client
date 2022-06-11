import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./contexts/auth.context";
import { LoaderContextProvider } from "./contexts/loader.context";
import Router from "./Router";
import { useInterceptor } from "./helpers/token.interceptor";

function App() {
    useInterceptor();
    return (
        <div>
            <ToastContainer autoClose={4000} theme="dark" />
            <AuthContextProvider>
                <LoaderContextProvider>
                    <Router />
                </LoaderContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
