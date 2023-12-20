"use client";
import { useState } from "react";
import { Input, Button, Spinner } from "@material-tailwind/react";

export default function PasswordChange() {

    const [vendorName, setVendorName] = useState("");
    const [vendorDesc, setVendorDesc] = useState("");
    const [vendorEmail, setVendorEmail] = useState("");
    const [vendorPassword, setVendorPassword] = useState("");
    const [vendorConfirmPassword, setVendorConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreateVendor = async () => {

        if (vendorPassword !== vendorConfirmPassword) {
            alert("Password does not match")
            return
        }

        if (!vendorName || !vendorDesc || !vendorEmail || !vendorPassword) {
            alert("All fields are required")
            return
        }

        setLoading(true)

        const data = {
            name: vendorName,
            description: vendorDesc,
            email: vendorEmail,
            password: vendorPassword
        }

        const response = await fetch("/api/admin/vendor/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        setLoading(false)
        if (response.ok) {

            alert("Vendor created successfully")
            window.location.reload()

        } else {

            console.log("Failed to create vendor")
            alert("Failed to create vendor")

        }
    }

    return (
        <>
            <div className="flex flex-col h-full  max-h-screen w-full">
                <div className="flex flex-col m-4 overflow-hidden">
                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-4xl font-bold">Create New Vendor</h1>
                            <div className="flex p-1 bg-only-purple" />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <form onSubmit={handleCreateVendor}>
                        <div className="flex flex-col justify-center gap-5 m-5">
                            <Input
                                crossOrigin
                                label="Email"
                                color="white"
                                onChange={(e) => { setVendorEmail(e.target.value) }}
                            />
                            <Input
                                crossOrigin
                                label="Password"
                                color="white"
                                type="password"
                                onChange={(e) => { setVendorPassword(e.target.value) }}
                            />
                            <Input
                                crossOrigin
                                label="Password Confirmation"
                                color="white"
                                type="password"
                                onChange={(e) => { setVendorConfirmPassword(e.target.value) }}
                            />
                            <Input
                                crossOrigin
                                label="Name"
                                color="white"
                                onChange={(e) => { setVendorName(e.target.value) }}
                            />
                            <Input
                                crossOrigin
                                label="Description"
                                color="white"
                                onChange={(e) => { setVendorDesc(e.target.value) }}
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
            </div >

            {
                loading ?
                    <>
                        <div className="fixed h-full w-full backdrop-blur-md inset-0 flex items-center justify-center z-50">
                            <Spinner className="text-only-white h-10 w-10" />
                        </div>
                    </> :
                    <></>
            }

        </>
    )
}