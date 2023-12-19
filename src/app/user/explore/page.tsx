"use client";
import { useEffect, useState } from 'react'
import Link from "next/link";

import { Spinner } from "@material-tailwind/react";

import AppBar from '@/components/menu/appbar'
import VendorList from '@/components/cards/vendorlist'

export default function Explore() {

    const [vendorList, setVendorList] = useState([])

    useEffect(() => {
        fetchVendorList()
    }, [])

    const fetchVendorList = () => {
        fetch("/api/user/explore")
            .then(res => res.json())
            .then(res => {
                setVendorList(res)
            })
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col m-4 overflow-hidden">

                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">KanTech</h1>
                            <div className="flex p-1 bg-only-purple" />
                            <text>Mau makan apa hari ini?</text>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mx-auto space-y-6 mb-20'>
                        {
                            vendorList.length === 0 ?
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Spinner className="text-only-white h-10 w-10" />
                                </div> :
                                vendorList?.map((vendor: any) => {
                                    return (
                                        <Link href={"/user/explore/vendor/" + vendor.id} key={vendor.id}>
                                            <VendorList
                                                props={vendor}
                                            />
                                        </Link>
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