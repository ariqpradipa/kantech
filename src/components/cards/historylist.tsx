"use client";

import React, { useState } from "react";
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

export default function History({ orderDate, menuName, vendorName, note, image, rating, review }: any) {

    const [ratingValue, setRatingValue] = useState(rating === "" || rating === 0 || rating === null ? 0 : parseInt(rating, 10));
    const [reviewValue, setReviewValue] = useState(review)
    const [tempReviewValue, setTempReviewValue] = useState(review)
    const [openDialog, setOpenDialog] = useState(false);

    const options: any = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formatOrderDate = (new Date(orderDate * 1000)).toLocaleDateString('en-ID', options)

    const handleRating = (value: any) => {
        setRatingValue(value)
    }

    const handleReview = (e: any) => {
        setReviewValue(tempReviewValue)
        setOpenDialog(!openDialog)
    }

    const handleOpenDialog = (value: any) => {
        setOpenDialog(!openDialog)
    }

    return (
        <>
            <Card className="w-full max-w-full flex-row bg-only-dark-gray text-only-white">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 rounded-r-none"
                >
                    <Image
                        src={image}
                        alt="card-image"
                        width={1024}
                        height={768}
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className="w-3/5 p-3">
                    <div className="flex flex-col">
                        <p className="text-only-white text-xs">{formatOrderDate}</p>
                        <p className="text-only-white font-bold text-sm lg:text-lg">{menuName}</p>
                        <p className="text-only-white font-bold text-xs lg:text-sm mb-2">{vendorName}</p>
                        <p className="text-only-gray text-[10px] lg:text-xs">Note: {note}</p>

                        <div className="flex pt-2">
                            {ratingValue === 0 ?
                                <div className="flex flex-col p-1 border-only-white border-2 rounded-md">
                                    <p className="text-only-white text-xs">Rate your order:</p>
                                    <Rating onChange={handleRating} value={ratingValue} />
                                </div>

                                :

                                <div className="flex flex-row">
                                    <div className=" flex items-center justify-center bg-only-purple rounded-l-md p-1 px-2 border-2 border-r-none border-only-white">
                                        <p className="text-only-white text-lg font-bold">{ratingValue}</p>
                                    </div>
                                    <div className="p-1 border-2 border-l-0 border-only-white rounded-r-md">
                                        <p className="text-xs">{reviewValue === "" ?
                                            <a className="cursor-pointer" onClick={handleOpenDialog}>
                                                <p className="text-sm font-bold p-1 italic">No review yet</p>
                                            </a>
                                            :
                                            <a className="cursor-pointer" onClick={handleOpenDialog}>
                                                <div className="flex flex-col min-w-min">
                                                    <p className="text-only-white text-sm">Your review:</p>
                                                    <Textarea
                                                        rows={2}
                                                        className="text-only-white text-xs !border-0 !p-0 !m-0 min-h-min focus:border-transparent font-poppins"
                                                        value={reviewValue}
                                                        labelProps={{
                                                            className: "before:content-none after:content-none",
                                                        }}
                                                    />
                                                </div>
                                            </a>
                                        }</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </CardBody>
            </Card>

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
                            value={tempReviewValue}
                            onChange={(e) => setTempReviewValue(e.target.value)}
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
                        onClick={handleReview}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}