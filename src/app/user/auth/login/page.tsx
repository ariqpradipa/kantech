"use client";

import Link from 'next/link';
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";


export default function Login() {
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
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
                                    />
                                </div>
                            </div>
                            <Button className="mt-6 bg-only-purple" fullWidth onClick={() => { console.log("hello from login") }}>
                                login
                            </Button>
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
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}