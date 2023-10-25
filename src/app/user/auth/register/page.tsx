import Link from 'next/link';
import {
    Input,
    Button,
} from "../../../components/material_tailwind/mtw";


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
                                <div>
                                    <text className="text-lg text-only-white">Email</text>
                                    <Input
                                        crossOrigin
                                        label="username"
                                        className=" text-only-white !border-t-blue-gray-200 focus:!border-only-purple"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                    />
                                </div>
                                <div>
                                    <text className="text-lg text-only-white">Password</text>
                                    <Input
                                        crossOrigin
                                        label="password"
                                        type="password"
                                        className=" text-only-white !border-t-blue-gray-200 focus:!border-only-purple"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                    />
                                </div>
                                <div>
                                    <text className="text-lg text-only-white">Confirm Password</text>
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
                            </div>
                            <Button className="mt-6 bg-only-purple" fullWidth>
                                register
                            </Button>
                            <div className='flex justify-center mt-5'>
                                <text className='only-white'>
                                    Already have account?{" "}
                                    <Link href="/user/auth/login" className="font-bold text-only-purple">
                                        Login
                                    </Link>
                                </text>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}