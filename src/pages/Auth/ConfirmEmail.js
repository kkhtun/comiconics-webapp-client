import "./ConfirmEmail.scss";

function ConfirmEmail() {
    return (
        <div className="authCard">
            <h1>Confirm Email</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="code">
                        Please fill in the code we sent to email@gmail.com
                    </label>
                    <input type="text" id="code" />
                </div>
            </form>
            <div className="buttonGroup">
                <button>Proceed</button>
            </div>
            <div className="resendCode">
                <a href="/">Resend Code? (30s)</a>
            </div>
        </div>
    );
}

export default ConfirmEmail;
