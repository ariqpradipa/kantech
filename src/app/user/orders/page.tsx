"use client";
import Link from "next/link";

import AppBar from '@/components/menu/appbar'
import OrderList from "@/components/cards/orderlist";
import { Typography } from "@material-tailwind/react";

export default function Orders() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col m-4 overflow-hidden">
                    <div className="flex mb-10">
                        <div className="flex flex-col mt-4">
                            <h1 className="text-4xl font-bold mb-1">Ongoing Order(s)</h1>
                            <div className="flex p-1 bg-only-purple" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mx-auto space-y-6 mb-20'>
                        <Link href="/user/auth/login">
                            <OrderList
                                menuName="Bubur Ayam"
                                vendorName="Rumah Bu Jepe"
                                menuImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                                note="tidak pakai sambel sama sekali"
                                status="Process"
                            />
                        </Link>
                        {/* <OrderList
                        menuName="Bubur Ayam Madura"
                        vendorName="Rumah Bu Jepe 2"
                        menuImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                        note="tidak pakai sambel sama sekali, dan kalau bisa banyakin kecapnya"
                        status="Pickup"
                    /> */}
                    </div>
                </div >
                <div className="fixed bottom-0">
                    <AppBar activeButton="orders" />
                </div>
            </div>
        </>
    )
}