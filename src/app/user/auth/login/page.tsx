"use client";

import { useState } from "react";
import Link from 'next/link';
import {
    Input,
    Button,
    Spinner,
    Typography,
} from "@material-tailwind/react";


export default function Login() {

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: any) => {
        e.preventDefault(); // Prevent default form submission

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("/api/user/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            setLoading(false);
            if (response.ok) {

                window.location.href = "/user/explore";

            } else {

                const data = await response.json();
                alert(data.error || "Failed to login");

            }

        } catch (error) {

            setLoading(false);
            console.error(error);

        }
    };

    return (
        <>
            <div className="mx-auto space-y-16 mt-10">
                <div className="flex">
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-bold mb-3">Login</h1>
                        <div className="flex p-1 bg-only-purple" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

                            <form onSubmit={handleLogin}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <div className='flex flex-col space-y-4'>
                                        <Typography variant="h6" className="-mb-3 text-only-white">
                                            Email
                                        </Typography>
                                        <Input
                                            crossOrigin
                                            label="email"
                                            className=" text-only-white !border-t-blue-gray-200 focus:!border-only-purple"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-4'>
                                        <Typography variant="h6" className="-mb-3 text-only-white">
                                            Password
                                        </Typography>
                                        <Input
                                            crossOrigin
                                            label="password"
                                            type="password"
                                            className=" text-only-white !border-t-blue-gray-200 focus:!border-only-purple"
                                            labelProps={{
                                                className: "hidden before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <Button className="mt-6 bg-only-purple" fullWidth type="submit">
                                    login
                                </Button>
                            </form>

                            <Button className="mt-6 bg-only-purple" fullWidth>
                                Login with sso
                            </Button>
                            <div className='flex justify-center mt-5'>
                                <Typography className="mt-4 text-center font-normal text-only-white">
                                    Don’t have account?{" "}
                                    <Link href="/user/auth/register" className="font-medium text-only-purple">
                                        Create Account
                                    </Link>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {
                loading ?
                    <>
                        <div className="fixed h-full w-full backdrop-blur-md inset-0 flex items-center justify-center">
                            <Spinner className="text-only-white h-10 w-10" />
                        </div>
                    </> :
                    <></>
            }
        </>
    )
}