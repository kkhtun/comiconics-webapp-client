import Login from "./Login";
import ConfirmEmail from "./ConfirmEmail";
import "./Auth.scss";
import { login } from "../../services/auth.service";

function Auth({ setAuth }) {
    const callLogin = async (data) => {
        try {
            const res = await login(data);
            setAuth((prev) => ({ ...prev, token: res.token }));
            localStorage.setItem("COMICONICS_TOKEN", res.token);
        } catch (e) {
            alert(e.message);
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
