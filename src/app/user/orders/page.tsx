"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Spinner } from "@material-tailwind/react";
import AppBar from '@/components/menu/appbar'
import OrderList from "@/components/cards/orderlist";

export default function Orders() {

    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetchOrderList()
    }, [])

    const fetchOrderList = async () => {

        try {

            const response = await fetch("/api/user/order/get", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {

                const data = await response.json()
                setOrderList(data)

            } else {

                const data = await response.json()
                console.log(data)

            }

        } catch (error) {

            console.error("Failed to fetch order list", error)

        }
    }

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
                        {
                            orderList.length === 0 ?
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Spinner className="text-only-white h-10 w-10" />
                                </div> :
                                orderList.map((order: any) => {
                                    return (
                                        <OrderList
                                            key={order.id}
                                            props={order}
                                        />
                                    )
                                })
                        }
                        {/* <OrderList
                            menuName="Bubur Ayam"
                            vendorName="Rumah Bu Jepe"
                            image="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            note="tidak pakai sambel sama sekali"
                            status="Process"
                        /> */}
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