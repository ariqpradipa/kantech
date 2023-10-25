"use client";

import Link from "next/link"
import { Button, IconButton } from "@material-tailwind/react";

export default function AppBar({ activeButton }: any) {
    return (
        <>
            <div className="fixed inset-0 bottom-0 flex justify-center items-end">
                <div className="flex bg-only-purple rounded-t-lg w-full lg:w-1/3">
                    <div className="flex mx-auto justify-between w-full">
                        <Link href="/user/explore" className="flex w-full">
                            <Button className={`flex flex-col w-full items-center gap-2 rounded-t-lg rounded-b-none ${activeButton === "explore" ? "bg-black bg-opacity-30" : "bg-transparent"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 512 512"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-8 w-8"
                                >
                                    <path
                                        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                                    />
                                </svg>
                                Explore
                            </Button>
                        </Link>
                        <Link href="/user/orders" className="flex w-full">
                            <Button className={`flex flex-col w-full justify-center items-center gap-2 rounded-t-lg rounded-b-none ${activeButton === "orders" ? "bg-black bg-opacity-30" : "bg-transparent"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 384 512"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-8 w-8"
                                >
                                    <path
                                        d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"
                                    />
                                </svg>
                                Orders
                            </Button>
                        </Link>
                        <Link href="/user/history" className="flex w-full">
                            <Button className={`flex flex-col w-full items-center gap-2 rounded-t-lg rounded-b-none ${activeButton === "history" ? "bg-black bg-opacity-30" : "bg-transparent"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 448 512"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-8 w-8"
                                >
                                    <path
                                        d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                                    />
                                </svg>
                                History
                            </Button>
                        </Link>
                        <Link href="/user/account" className="flex w-full">
                            <Button className={`flex flex-col w-full items-center gap-2 rounded-t-lg rounded-b-none ${activeButton === "account" ? "bg-black bg-opacity-30" : "bg-transparent"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 448 512"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-8 w-8"
                                >
                                    <path
                                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                                    />
                                </svg>
                                Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}