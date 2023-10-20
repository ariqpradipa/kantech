"use client";

import Link from 'next/link';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";


export default function Register() {
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
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
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
                                />
                                <Typography variant="h6" className="-mb-3 text-only-white text-only-white">
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
                                />
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
                                />
                            </div>
                            <Button className="mt-6 bg-only-purple" fullWidth>
                                register
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already have account?{" "}
                                <a href="/user/auth/login" className="font-medium text-only-purple">
                                    Login
                                </a>
                            </Typography>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}