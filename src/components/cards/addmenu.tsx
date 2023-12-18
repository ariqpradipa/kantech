"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
    Rating,
    Button,
    Card,
    CardHeader,
    CardBody,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react";

export default function AddMenu({ props }: any) {

    const [openDialog, setOpenDialog] = useState(true);
    const [loading, setLoading] = useState(false);

    const options: any = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const handleOpenDialog = (value: any) => {
        setOpenDialog(!openDialog)
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
                            <Input crossOrigin label="Nama Menu" color="white" />
                            <Textarea
                                label="Deskripsi"
                                color="cyan"
                                className="text-only-white"
                            />
                            <Input crossOrigin label="Harga" type="number" color="white" />

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
                    >
                        <span>Tambah</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}