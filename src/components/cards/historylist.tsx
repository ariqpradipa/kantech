import React, { useState } from "react";
import { Rating } from "@material-tailwind/react";

export default function History({ orderDate, menuName, vendorName, note, status, menuImage, rating, review }: any) {

    const [ratingValue, setRatingValue] = useState(rating === "" ? 0 : parseInt(rating, 10));

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

    return (
        <>

            <div className="w-full max-w-full flex">
                <div className="flex-none w-28 lg:w-32 bg-cover bg-center text-center rounded-l-xl" style={{ backgroundImage: `url(${menuImage})` }}>
                </div>
                <div className="flex flex-col justify-between leading-normal bg-only-dark-gray px-4 py-3 rounded-r-xl">
                    <div className="flex flex-col">
                        <text className="text-only-white text-xs">{formatOrderDate}</text>
                        <text className="text-only-white font-bold text-sm lg:text-lg">{menuName}</text>
                        <text className="text-only-white font-bold text-xs lg:text-sm mb-2">{vendorName}</text>
                        <text className="text-only-gray text-[10px] lg:text-xs">Note: {note}</text>

                        <div className="flex pt-2">
                            {ratingValue === 0 ?
                                <div className="flex flex-col p-1 border-only-white border-2 rounded-md">
                                    <text className="text-only-white text-xs">Rate your order:</text>
                                    <Rating value={ratingValue} />
                                </div>

                                :

                                <div className="flex flex-row">
                                    <div className=" flex items-center justify-center bg-only-purple rounded-l-md p-1 px-4  border-2 border-r-none border-only-white">
                                        <text className="text-only-white text-lg font-bold">{ratingValue}</text>
                                    </div>
                                    <div className="p-1 border-2 border-l-0 border-only-white rounded-r-md">
                                        <text className="text-xs">{review === "" ?
                                            <text className="text-sm font-bold p-1 italic">No review yet</text>
                                            :
                                            <div className="flex flex-col">
                                                <text className="text-only-white text-sm">Your review:</text>
                                                <text className="text-only-gray text-xs">{review}</text>
                                            </div>
                                        }</text>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}