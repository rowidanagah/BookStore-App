const Login = () => {
    return (
        <div class="tab-content">
            <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
            >
                <form>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <input type="email" id="loginName" class="form-control" />
                        <label class="form-label" for="loginName">
                            Email or username
                        </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                        <input type="password" id="loginPassword" class="form-control" />
                        <label class="form-label" for="loginPassword">
                            Password
                        </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" class="btn btn-primary btn-block mb-4">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
