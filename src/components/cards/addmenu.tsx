"use client";

import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Spinner,
    Textarea,
} from "@material-tailwind/react";

export default function AddMenu({ callback }: any) {

    const [openDialog, setOpenDialog] = useState(true);
    const [menuName, setMenuName] = useState("");
    const [menuDesc, setMenuDesc] = useState("");
    const [menuPrice, setMenuPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleOpenDialog = (value: any) => {
        setOpenDialog(!openDialog)
        callback()
    }

    const handleAddMenu = async () => {

        setLoading(true)

        const data = {
            name: menuName,
            description: menuDesc,
            price: menuPrice,
        }

        const response = await fetch("/api/vendor/menu/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            const result = await response.json()
            console.log(result)
            setLoading(false)
            setOpenDialog(false)
            window.location.reload()
        } else {
            console.log("Failed to add new menu")
            setLoading(false)
        }

    }

    return (
        <>
            <Dialog
                open={openDialog}
                size={"sm"}
                handler={handleOpenDialog}
                className="bg-only-dark-gray"
            >
                <DialogHeader className="text-only-white">Add Menu</DialogHeader>
                <DialogBody>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-2/3 gap-5">
                            <Input
                                crossOrigin
                                label="Nama Menu"
                                color="white"
                                onChange={(e) => setMenuName(e.target.value)}
                            />
                            <Textarea
                                label="Deskripsi"
                                color="cyan"
                                className="text-only-white"
                                onChange={(e) => setMenuDesc(e.target.value)}
                            />
                            <Input
                                crossOrigin
                                label="Harga"
                                type="number"
                                color="white"
                                onChange={(e) => setMenuPrice(parseFloat(e.target.value))}
                            />
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        onClick={() => handleOpenDialog(null)}
                        className="mr-1"
                    >
                        <span className="text-only-white">Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => handleAddMenu()}
                    >
                        <span>Tambah</span>
                    </Button>
                </DialogFooter>
            </Dialog>

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