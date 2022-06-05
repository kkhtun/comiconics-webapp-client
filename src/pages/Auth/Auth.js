import Login from "./Login";
import ConfirmEmail from "./ConfirmEmail";
import "./Auth.scss";

function Auth() {
    return (
        <>
            <div className="authWrapper">
                <Login />
            </div>
            <div className="authWrapper">
                <ConfirmEmail />
            </div>
        </>
    );
}

export default Auth;
