"use client";
import { useEffect, useState } from "react"

import {
    Button,
    Spinner
} from "@material-tailwind/react";

import AppBar from '@/components/menu/appbar'
import VendorMenuList from '@/components/cards/vendormenulist'
import AddMenu from '@/components/cards/addmenu'

interface pageProps {
    params: { vendor_id: string }
}

export default function VendorMenu({ params }: pageProps) {
    const [menuList, setMenuList] = useState([null])
    const [openAddMenu, setOpenAddMenu] = useState(false)

    useEffect(() => {
        fetchMenuList()
    }, [])

    const fetchMenuList = async () => {

        try {

            const menuResponse = await fetch("/api/vendor/menu/get", {
                method: "GET",

            });

            if (menuResponse.ok) {

                const response_data = await menuResponse.json();
                setMenuList(response_data)

            } else {

                const data = await menuResponse.json();
                alert(data.error || "Failed to login");

                window.location.href = "/user/auth/login";

            }

        } catch (error) {

            console.error("Failed to get menu list ", error);

        }
    }

    const handleAddMenu = () => {
        setOpenAddMenu(true)
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col m-4 overflow-hidden">

                    <div className="flex mb-10 justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">Menu</h1>
                            <div className="flex p-1 bg-only-purple" />
                        </div>
                        {
                            menuList[0] === null ? null :
                                <Button className="flex items-center gap-3 bg-only-purple" onClick={handleAddMenu}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#ffffff"
                                        className="w-5"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    Add Menu
                                </Button>
                        }
                    </div>
                    <div className='flex flex-col justify-center mx-auto space-y-6 mb-20'>
                        {
                            menuList[0] === null ?
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Spinner className="text-only-white h-10 w-10" />
                                </div> :
                                menuList.length === 0 ?
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="flex flex-col justify-center items-center">
                                            <text className="text-2xl font-bold mt-4 text-only-white">Menu Kosong</text>
                                            <text className="text-center text-only-white">Silahkan tambahkan menu terlebih dahulu</text>
                                        </div>
                                    </div> :
                                    menuList.map((menu: any, index) => {
                                        return (
                                            <VendorMenuList
                                                key={menu.id}
                                                props={menu}
                                            />
                                        )
                                    })
                        }
                    </div>
                </div>
            </div>

            {openAddMenu && <AddMenu />}
        </>
    )
}