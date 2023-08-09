import { useState } from "react";
import { useCookies } from "react-cookie";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";

const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const signUp = async () => {
        if (email !== confirmEmail) {
            alert("Email and confirm email fields must match. Please check again");
            return;
        }
        const data = { email, password, username, firstName, lastName };
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date });
            alert("Success");
            navigate("/home");
        } else {
            alert("Failure");
        }
    };

    return (
        <div className="h-full w-full bg-white">
            <div className="flex flex-col items-center bg-white">
                {/* Navigation bar with background color */}
                <div className="logo p-5 bg-white border-b border-solid border-gray-300 w-full flex justify-center items-center">
                    <img src="./logo1.jpg" width="250" height="150" alt="Logo" />
                </div>

                <div className="inputRegion bg-white font-bold flex flex-col items-center w-1/4 py-10">
                    <div className="font-bold mb-6 text-2xl">
                        Join the Melodious Journey Today!
                    </div>
                    <TextInput
                        label="Email address"
                        placeholder="Enter your email."
                        className="my-6"
                        value={email}
                        setValue={setEmail}
                    />

                    <TextInput
                        label="Confirm Email address"
                        placeholder="Enter your email again."
                        className="mb-6"
                        value={confirmEmail}
                        setValue={setConfirmEmail}
                    />

                    <TextInput
                        label="Username"
                        placeholder="Enter your username."
                        className="mb-6"
                        value={username}
                        setValue={setUsername}
                    />

                    <PasswordInput
                        label="Create Password"
                        placeholder="Enter a strong password here."
                        value={password}
                        setValue={setPassword}
                    />

                    <div className="w-full flex justify-between items-center space-x-8">
                        <TextInput
                            label="First Name"
                            placeholder="Enter Your First Name."
                            className="my-6"
                            value={firstName}
                            setValue={setFirstName}
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Enter Your Last Name."
                            className="my-6"
                            value={lastName}
                            setValue={setLastName}
                        />
                    </div>

                    <div className="w-full flex items-center justify-center my-10">
                        <button
                            className="bg-app-green font-semibold p-3 px-6 rounded-full"
                            style={{ backgroundColor: "#10EB37" }}
                            onClick={(e) => {
                                e.preventDefault();
                                signUp();
                            }}
                        >
                            SIGN UP
                        </button>
                    </div>

                    <div className="w-full border border-solid bg-white border-gray-300"></div>

                    <div className="my-6 bg-white font-semibold text-lg">
                        Already have an account?
                    </div>

                    <div
                        className="border w-full flex bg-white items-center justify-center py-4 rounded-full font-bold"
                        style={{ borderColor: "#1DB954", color: "#10EB37" }}
                    >
                        <Link to="/login">LOG IN INSTEAD</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
