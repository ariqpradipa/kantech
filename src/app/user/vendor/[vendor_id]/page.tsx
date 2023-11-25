"use client";
import Link from "next/link";
import { useState } from "react"

import AppBar from '@/components/menu/appbar'
import VendorList from '@/components/cards/vendorlist'
import MenuList from '@/components/cards/menulist'

interface pageProps {
    params: { vendor_id: string }
}

export default function Explore({ params }: pageProps) {
    const [vendorName, setVendorName] = useState("Rumah Bu Jepe 1")
    const [vendorRating, setVendorRating] = useState("4.2")
    const [totalOrders, setTotalOrders] = useState(0)

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
                        <MenuList
                        name="menuName"
                        description="the food is so good"
                        price="15000"
                        rating="4.2"
                        image="https://asset.kompas.com/crops/Kyp-MBp3Kf0PLGveth_zzhU2gfI=/0x0:1000x667/750x500/data/photo/2020/07/11/5f09e008e7fee.jpg"

                        />
                    </div>
                </div>
                <AppBar activeButton="explore" />
            </div>
        </>
    )
}