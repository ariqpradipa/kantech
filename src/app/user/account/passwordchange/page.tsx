"use client";
import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import AppBar from '@/components/menu/appbar'

export default function PasswordChange() {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleChangePassword = async () => {

        if (oldPassword === "") {
            alert("Please enter your old password")
            return
        }

        if (newPassword !== confirmNewPassword) {
            alert("Passwords do not match")
            return
        }

        fetch('/api/user/account/password/change', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                oldPassword,
                newPassword
            }),
        }).then((res: any) => {
            if (res.status === 200) {
                alert("Password changed successfully")
                window.location.href = "/user/account";
            } else {
                res.json().then((data: any) => {
                    alert(data)
                    throw new Error(data.error);
                })
            }

        }).catch((err) => {
            console.log(err)
            alert(err)
        })
    }

    return (
        <>
            <div className="flex flex-col h-full  max-h-screen w-full">
                <div className="flex flex-col m-4 overflow-hidden">
                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-4xl font-bold">Change Password</h1>
                            <div className="flex p-1 bg-only-purple" />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <form onSubmit={handleChangePassword}>
                        <div className="flex flex-col justify-center gap-5 m-5">
                            <Input
                                crossOrigin
                                label="Old Password"
                                color="white"
                                type="password"
                                onChange={(e) => { setOldPassword(e.target.value) }}
                            />
                            <Input
                                crossOrigin
                                label="New Password"
                                color="white"
                                type="password"
                                onChange={(e) => { setNewPassword(e.target.value) }}
                            />
                            <Input
                                crossOrigin
                                label="Confirm New Password"
                                color="white"
                                type="password"
                                onChange={(e) => { setConfirmNewPassword(e.target.value) }}
                            />

                            <Button
                                type="submit"
                                className="bg-only-purple text-only-white"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
                <AppBar activeButton="account" />
            </div >
        </>
    )
}