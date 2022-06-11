import Login from "./Login";
import ConfirmEmail from "./ConfirmEmail";
import "./Auth.scss";
import { login } from "../../services/auth.service";
import { toast } from "react-toastify";

function Auth({ setAuth }) {
    const callLogin = async (data) => {
        try {
            const res = await login(data);
            if (res.token && res.email) {
                setAuth({ token: res.token, email: res.email });
                localStorage.setItem("COMICONICS_TOKEN", res.token);
                localStorage.setItem("COMICONICS_USER", res.email);
            } else {
                throw new Error("Bad Data Received From Server");
            }
        } catch (e) {
            toast(e.message);
        }
    };
    return (
        <>
            <div className="authWrapper">
                <Login callLogin={callLogin} />
            </div>
            <div className="authWrapper">
                <ConfirmEmail />
            </div>
        </>
    );
}

export default Auth;
