import { useState } from "react";
import "./Login.scss";

function Login({ callLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) alert("Invalid Email or Password");
        callLogin({ email, password });
    };
    return (
        <div className="authCard">
            <h1>Join Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="buttonGroup">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
