// import React from 'react';
import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
import { useCookies } from "react-cookie";


const LoginComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {
        const data = { email, password };
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/login",
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
        <div className="w-full h-full flex flex-col items-center bg-white">
            {/* Navigation bar with background color */}
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center items-center">
                <img src="./logo1.jpg" width="250" height="150" alt="Logo" />
            </div>

            <div className="inputRegion font-bold flex flex-col items-center w-1/4 py-10">
                <div className="font-bold mb-6">To continue, log in to MeloTunes.</div>
                <TextInput
                    label="Email address or username"
                    placeholder="Email address or Username"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />

                <div className="w-full flex items-center justify-center my-10">
                    <button className="bg-app-green font-semibold p-3 px-6 rounded-full" style={{ backgroundColor: '#10EB37' }}
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}
                    >
                        LOG IN
                    </button>
                </div>

                <div className="w-full border border-solid border-gray-300"></div>

                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>

                <div className="border w-full flex items-center justify-center py-4 rounded-full font-bold" style={{ borderColor: '#1DB954', color: '#10EB37' }}>
                    <Link to="/signup">SIGN UP FOR MELOTUNES</Link>
                </div>

            </div>

        </div>
    );
};


export default LoginComponent;

// Green = #10EB37
// spotify green = #1DB954
// White = #FFFFFF
// Black=  #191414
