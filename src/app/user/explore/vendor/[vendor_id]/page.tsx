"use client";
import Link from "next/link";
import { useEffect, useState } from "react"

import { Spinner } from "@material-tailwind/react";

import prisma from "@/lib/prisma";

import AppBar from '@/components/menu/appbar'
import VendorList from '@/components/cards/vendorlist'
import MenuList from '@/components/cards/menulist'

interface pageProps {
    params: { vendor_id: string }
}

export default function VendorUser({ params }: pageProps) {
    const [vendorName, setVendorName] = useState("")
    const [vendorRating, setVendorRating] = useState("")
    const [totalOrders, setTotalOrders] = useState(0)
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        fetchMenuList()
    }, [])

    const fetchMenuList = async () => {

        try {


            const menuResponse = await fetch("/api/user/explore/vendor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    vendor_id: params.vendor_id,
                }),
            });

            if (menuResponse.ok) {

                const response_data = await menuResponse.json();
                setVendorName(response_data[0].vendor.name)
                setVendorRating(response_data[0].vendor.rating)
                setMenuList(response_data)

            } else {

                const data = await menuResponse.json();
                alert(data.error || "Failed to login");

            }

        } catch (error) {

            console.error("Failed to get menu list ", error);

        }
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col m-4 overflow-hidden">

                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">{vendorName}</h1>
                            <div className="flex flex-row">
                                <div className="flex p-1 pr-2 pl-2 bg-only-purple mr-2">
                                    <p className="font-bold text-base">{vendorRating}</p>
                                </div>
                                <div className="flex h-2 p-1 bg-only-purple w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mx-auto space-y-6 mb-20'>

                        {
                            menuList.length === 0 ?
                                <div className="fixed h-full w-full backdrop-blur-md inset-0 flex items-center justify-center">
                                    <Spinner className="text-only-white h-10 w-10" />
                                </div> :
                                menuList.map((menu: any, index) => {
                                    return (
                                        <MenuList
                                            key={index}
                                            props={menu}
                                        />
                                    )
                                })
                        }
                    </div>
                </div>
                <AppBar activeButton="explore" />
            </div>
        </>
    )
}