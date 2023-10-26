"use client";
import Image from "next/image"
import { Typography } from "@material-tailwind/react"

export default function VendorList({ vendorName, vendorDescription, vendorImage, vendorRating }: any) {
    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-l-lg text-center" style={{ backgroundImage: `url(${vendorImage})` }}>
                </div>
                <div className="bg-only-dark-gray rounded-b rounded-r-lg p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-only-white font-bold text-xl mb-2">{vendorName}</div>
                        <p className="text-only-gray text-base">{vendorDescription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}