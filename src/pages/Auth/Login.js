import "./Login.scss";

function Login() {
    return (
        <div className="authCard">
            <h1>Join Us</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
            </form>
            <div className="buttonGroup">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
}

export default Login;
