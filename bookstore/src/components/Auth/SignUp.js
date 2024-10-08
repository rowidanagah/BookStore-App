import { useMutation } from "@apollo/client";
import { SignUp_Mutation } from "../../ApolloClient/ROOT_MUTATIONS";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
import HomeBtn from "../HomeButton";
import loadingStatus from "../../helpers/loadingStatus";

const SignUp = () => {
    const [SignUpdata, setSignUpdata] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });
    const { data, loadingState, signUpUser } = useSignUp();

    const handleSubmit =  async (SignUpdata, event) => {
        event.preventDefault();
        await signUpUser(SignUpdata);

    };
    return (
        <div>
            <div class="section_our_solution container mt-5 ">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                                <div class="solution_card">
                                {loadingState == loadingStatus.hasErrored && <h5> {loadingState}</h5>}

                                    <div class="hover_color_bubble"></div>
                                    <form onSubmit={(event) => handleSubmit(SignUpdata, event)}>
                                        {/* email */}
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                                value={SignUpdata.email}
                                                onChange={(e) => {
                                                    setSignUpdata({
                                                        ...SignUpdata,
                                                        email: e.target.value,
                                                    });
                                                    console.log(SignUpdata);
                                                }}
                                            />
                                            <small id="emailHelp" class="form-text text-muted">
                                                We'll never share your email with anyone else.
                                            </small>
                                        </div>
                                        {/* user name */}
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">User Name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="exampleInputPassword1"
                                                value={SignUpdata.username}
                                                onChange={(e) => {
                                                    setSignUpdata({
                                                        ...SignUpdata,
                                                        username: e.target.value,
                                                    });
                                                }}
                                                placeholder="User Name"
                                            />
                                        </div>
                                        {/* password */}
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="exampleInputPassword1"
                                                value={SignUpdata.password1}
                                                onChange={(e) => {
                                                    setSignUpdata({
                                                        ...SignUpdata,
                                                        password1: e.target.value,
                                                    });
                                                }}
                                                placeholder="Password"
                                            />
                                        </div>
                                        {/* confirm Password 2 */}
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="exampleInputPassword1"
                                                value={SignUpdata.password2}
                                                onChange={(e) => {
                                                    setSignUpdata({
                                                        ...SignUpdata,
                                                        password2: e.target.value,
                                                    });
                                                }}
                                                placeholder="Password"
                                            />
                                        </div>

                                        <button type="submit" class="btn btn-primary m-3">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeBtn />
        </div>
    );
};

export default SignUp;
