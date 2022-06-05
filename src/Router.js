import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import Wrapper from "./Wrapper";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Protected from "./pages/Protected/Protected";
import { useState } from "react";
import Genres from "./pages/Genres/Genres";
import SingleComic from "./pages/SingleComic/SingleComic";
import Read from "./pages/Read/Read";

function ProtectedRoute({ auth }) {
    if (!auth) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

function Router() {
    const [auth, setAuth] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/genres" element={<Genres />} />
                    <Route path="/comic" element={<SingleComic />} />
                    <Route path="/read" element={<Read />} />
                    <Route path="/login" element={<Auth />} />
                    // Protected Routes
                    <Route path="" element={<ProtectedRoute auth={auth} />}>
                        <Route path="protected" element={<Protected />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
