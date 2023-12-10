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
                <DialogHeader className="text-only-white">Review</DialogHeader>
                <DialogBody>
                    <div >
                        <Textarea
                            resize={true}
                            className="text-only-white !border-t-blue-gray-200 focus:!border-only-purple"
                            labelProps={{
                                className: "hidden",
                            }}
                            value="semua lo ga beber"
                        />
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
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}