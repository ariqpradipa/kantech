"use client";
import { useState, useEffect } from 'react'

import { Spinner } from '@material-tailwind/react';

import AppBar from '@/components/menu/appbar'
import HistoryList from '@/components/cards/historylist'

export default function History() {

    const [historyList, setHistoryList] = useState([null])

    useEffect(() => {
        fetchHistory()
    }, [])

    const fetchHistory = async () => {

        try {

            const response = await fetch("/api/user/history/get", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {

                const data = await response.json()
                setHistoryList(data)

            } else {

                const data = await response.json()
                console.log(data)

            }

        } catch (error) {

            console.error("Failed to fetch history list", error)

        }
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col m-4 overflow-hidden">

                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-6xl lg:text-6xl font-bold mb-2">History</h1>
                            <div className="flex p-1 bg-only-purple" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mx-auto space-y-6 mb-20 w-full'>
                        {
                            historyList[0] === null ?
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Spinner className="text-only-white h-10 w-10" />
                                </div> :
                                historyList.length === 0 ?
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="flex flex-col justify-center items-center">
                                            <text className="text-2xl font-bold mt-4 text-only-white">History Empty</text>
                                            <text className="text-center text-only-white">Please make order first</text>
                                        </div>
                                    </div> :
                                    historyList.map((history: any) => (
                                        <HistoryList
                                            key={history.id}
                                            props={history}
                                        />
                                    ))
                        }
                    </div>
                </div>
                <AppBar activeButton="history" />
            </div>
        </>
    )
}