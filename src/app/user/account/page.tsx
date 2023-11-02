"use client";
import Link from "next/link";
import { Avatar } from "@material-tailwind/react";
import AppBar from '@/components/menu/appbar'

export default function Account() {
    return (
        <>
            <div className="flex flex-col h-full  max-h-screen">
                <div className="flex flex-col m-4 overflow-hidden">
                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-5xl lg:text-6xl font-bold">Your Account</h1>
                            <div className="flex p-1 bg-only-purple" />
                        </div>
                    </div>

                    <div className="flex flex-row mt-5">
                        <Avatar
                            src="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            alt="avatar"
                            size="xl"
                        />
                        <div className="flex flex-col ml-2 justify-center">
                            <text className="text-3xl font-bold text-only-white">Username</text>
                            <text className="text-base text-only-white">username@email.com</text>
                        </div>
                    </div>

                    <div className="flex flex-col h-screen justify-between">
                        <div className="flex flex-col mt-10 gap-3">
                            <Link href="#">
                                <text className="text-only-white text-xl font-bold">Update Profile</text>
                            </Link>
                            <Link href="#">
                                <text className="text-only-white text-xl font-bold">Change Password</text>
                            </Link>
                            <Link href="#">
                                <text className="text-only-white text-xl font-bold">Favorites</text>
                            </Link>
                        </div>

                        <div className="flex flex-col mb-24 gap-3">
                            <Link href="#">
                                <text className="text-only-white text-xl font-bold">Terms & Privacy</text>
                            </Link>
                            <Link href="#">
                                <text className="text-only-white text-xl font-bold">Logout</text>
                            </Link>
                        </div>
                    </div>
                </div>
                <AppBar activeButton="account" />
            </div >
        </>
    )
}