"use client";
import Image from "next/image"
import { Typography } from "@material-tailwind/react"

export default function VendorList({ vendorName, vendorDescription, vendorImage, vendorRating }: any) {
    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="flex-none h-48 lg:h-auto lg:w-48 bg-cover bg-center text-center rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" style={{ backgroundImage: `url(${vendorImage})` }}>
                </div>
                <div className="bg-only-dark-gray p-4 flex flex-col justify-between leading-normal rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl">
                    <div className="mb-8">
                        <div className="text-only-white font-bold text-xl mb-2">{vendorName}</div>
                        <p className="text-only-gray text-sm">{vendorDescription}</p>
                    </div>
                    <div className="flex">
                        <div className="flex items-center justify-center py-1 px-4 bg-only-purple rounded">
                            <text className="text-sm font-bold text-center">{vendorRating}</text>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}