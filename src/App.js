import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./contexts/auth.context";
import Router from "./Router";

function App() {
    return (
        <div>
            <ToastContainer autoClose={4000} theme="dark" />
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </div>
    );
}

export default App;
