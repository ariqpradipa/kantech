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

            // const vendor: any = prisma.vendor.findUnique({
            //     select: {
            //         name: true,
            //         rating: true,
            //     },
            //     where: {
            //         id: params.vendor_id
            //     }
            // })

            // if (!vendor) {
            //     alert("Vendor not found")
            //     return
            // }

            // setVendorName(await vendor.name)
            // setVendorRating(await vendor.rating)

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

                setMenuList(await menuResponse.json())

            } else {

                const data = await menuResponse.json();
                alert(data.error || "Failed to login");

            }

            // fetch("/api/user/explore/vendor")
            //     .then(res => res.json())
            //     .then(res => {

            //     })

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
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Spinner className="text-only-white h-10 w-10" />
                                </div> :
                                menuList.map((menu: any, index) => {
                                    return (
                                        <MenuList
                                            key={index}
                                            name={menu.name}
                                            description={menu.description}
                                            image={menu.photo_url}
                                            rating={menu.rating}
                                            price={menu.price}
                                        />
                                    )
                                })
                        }
                        {/* <MenuList
                            name="menuName"
                            description="the food is so good"
                            price="15000"
                            rating="4.2"
                            image="https://asset.kompas.com/crops/Kyp-MBp3Kf0PLGveth_zzhU2gfI=/0x0:1000x667/750x500/data/photo/2020/07/11/5f09e008e7fee.jpg"

                        /> */}
                    </div>
                </div>
                <AppBar activeButton="explore" />
            </div>
        </>
    )
}