import { Routes, Route, Outlet, Navigate, HashRouter } from "react-router-dom";
import Wrapper from "./Wrapper";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Protected from "./pages/Protected/Protected";
import { useEffect, useState } from "react";
import Genres from "./pages/Genres/Genres";
import SingleComic from "./pages/SingleComic/SingleComic";
import Read from "./pages/Read/Read";

function ProtectedRoute({ auth }) {
    if (!auth) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

function InverseProtectedRoute({ auth }) {
    if (auth) return <Navigate to="/" replace />;
    return <Outlet />;
}

function Router() {
    const [auth, setAuth] = useState({ token: null, email: null });
    useEffect(() => {
        let token = localStorage.getItem("COMICONICS_TOKEN");
        if (token) {
            setAuth((prev) => ({ ...prev, token }));
            console.log("Previous token found on storage, set to state");
        }
    }, []);
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Wrapper />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/genres" element={<Genres />} />
                    <Route path="/comic" element={<SingleComic />} />
                    <Route path="/read" element={<Read />} />

                    <Route
                        path=""
                        element={<InverseProtectedRoute auth={auth.token} />}
                    >
                        <Route
                            path="/login"
                            element={<Auth setAuth={setAuth} />}
                        />
                    </Route>

                    <Route
                        path=""
                        element={<ProtectedRoute auth={auth.token} />}
                    >
                        <Route path="protected" element={<Protected />} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default Router;
