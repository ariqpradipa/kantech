"use client";

import { useState, useEffect } from "react";
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

    useEffect(() => {

        if (typeof window === "undefined") {
            return;
        }

        const params = new URLSearchParams(window.location.search);

        if (params.has("ticket")) {
            AuthSso();
        }

    }, []);

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

    const AuthSso = async () => {
        setLoading(true);
        if (typeof window === "undefined") {
            return;
        }

        const url = new URL(window.location.href);
        const params = url.searchParams;

        if (!params.has("ticket")) {
            const redirectUrl = `https://sso.ui.ac.id/cas2/login?service=${encodeURIComponent(
                window.location.origin + window.location.pathname
            )}`;
            window.location.href = redirectUrl;
        } else {
            try {
                const ticket = params.get("ticket") || "";
                const service = window.location.origin + window.location.pathname;
                const paramsUrl = new URLSearchParams({ ticket, service }).toString();

                const response = await fetch(`/api/user/auth/login/sso?${paramsUrl}`, {
                    method: "GET",
                });

                setLoading(false);

                if (response.ok) {
                    // Remove the ticket parameter from the URL
                    params.delete("ticket");
                    window.history.pushState({}, '', url.toString());
                    window.location.href = "/user/explore";
                } else {
                    const data = await response.json();
                    alert(data.error || "Failed to login");
                }
            } catch (error) {
                setLoading(false);
                console.error('Error during SSO authentication:', error);
                alert('Error during SSO authentication');
            }
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

                            <Button className="mt-6 bg-only-purple" onClick={AuthSso} fullWidth>
                                Login with sso
                            </Button>
                            <div className='flex justify-between mt-5'>
                                <Typography className="mt-4 text-left font-normal text-only-white flex flex-col">
                                    Don’t have account?{" "}
                                    <Link href="/user/auth/register" className="font-medium text-only-purple">
                                        Create Account
                                    </Link>
                                </Typography>
                                <Typography className="mt-4 text-left font-normal text-only-white flex flex-col">
                                    Vendor?{" "}
                                    <Link href="/vendor/auth/login" className="font-medium text-only-purple">
                                        Login Here
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