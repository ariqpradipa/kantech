"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCreateUser = async (e: any) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            
            if (response.ok) {
                window.location.href = "/user/explore";
            } else {
                const data = await response.json();
                alert(data.error || "Failed to register user");
            }
        } catch (error) {
            console.error("Error creating user:", error);
            alert("An unexpected error occurred");
        }
    };

    return (
        <>
            <div className="mx-auto space-y-16 mt-10">
                <div className="flex">
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-bold">Create Account</h1>
                        <div className="flex p-1 bg-only-purple" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

                            <form onSubmit={handleCreateUser}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <div className='flex flex-col space-y-4'>
                                        <Typography variant="h6" className="-mb-3 text-only-white">
                                            Email
                                        </Typography>
                                        <Input
                                            crossOrigin
                                            label="username"
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
                                                className: "hidden",
                                            }}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-4'>
                                        <Typography variant="h6" className="-mb-3 text-only-white">
                                            Confirm Password
                                        </Typography>
                                        <Input
                                            crossOrigin
                                            label="confirmPassword"
                                            type="password"
                                            className=" text-only-white !border-t-blue-gray-200 focus:!border-only-purple"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="mt-6 bg-only-purple" fullWidth>
                                    register
                                </Button>
                            </form>

                            <div className='flex justify-center mt-5'>
                                <Typography className="mt-4 text-center font-normal text-only-white">
                                    Already have account?{" "}
                                    <Link href="/user/auth/login" className="font-medium text-only-purple">
                                        Login
                                    </Link>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}