"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar } from "@material-tailwind/react";
import AppBar from '@/components/menu/appbar'

export default function Account() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {

        const getUser = async () => {

            try {

                const response = await fetch('/api/auth/me', {
                    method: 'GET',
                });

                if (response.status === 200) {

                    const data = await response.json();
                    setUsername(data.username)
                    setEmail(data.email)

                } else {

                    const data = await response.json();
                    throw new Error(data.error);

                }

            } catch (error: any) {

                console.error("An unexpected error occurred:", error);
                alert(error.message);

            }
        }

        getUser()

    }, [])

    const handleLogout = async () => {

        console.log("Logging out...")

        try {

            const response = await fetch('/api/auth/logout', {
                method: 'GET',
            });

            if (response.status === 200) {

                console.log("Logout successful")
                window.location.href = "/";

            } else {

                const data = await response.json();
                throw new Error(data.error);

            }

        } catch (error: any) {

            console.error("An unexpected error occurred:", error);
            alert(error.message);

        }
    }
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
                            <p className="text-3xl font-bold text-only-white">{username}</p>
                            <p className="text-base text-only-white">{email}</p>
                        </div>
                    </div>

                    <div className="flex flex-col h-screen justify-between">
                        <div className="flex flex-col mt-10 gap-3">
                            <Link href="#">
                                <p className="text-only-white text-xl font-bold">Update Profile</p>
                            </Link>
                            <Link href="/user/account/passwordchange">
                                <p className="text-only-white text-xl font-bold">Change Password</p>
                            </Link>
                            <Link href="#">
                                <p className="text-only-white text-xl font-bold">Favorites</p>
                            </Link>
                        </div>

                        <div className="flex flex-col mb-24 gap-3">
                            <Link href="#">
                                <p className="text-only-white text-xl font-bold">Terms & Privacy</p>
                            </Link>
                            <a onClick={handleLogout} className="cursor-pointer">
                                <p className="text-only-white text-xl font-bold">Logout</p>
                            </a>
                        </div>
                    </div>
                </div>
                <AppBar activeButton="account" />
            </div >
        </>
    )
}