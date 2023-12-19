import { useState, useEffect } from "react"

import Image from "next/image"
import {
    Card,
    CardHeader,
    CardBody,
    Checkbox,
    Spinner
} from "@material-tailwind/react"

export default function OrderList({ props }: any) {

    const { id, menu: { name: menuName, photo_url: image }, vendor: { name: vendorName }, note, status } = props

    const [loading, setLoading] = useState(false);

    let statusNow;
    if (status === "confirmation") {

        statusNow = "Waiting Confirmation"

    } else if (status === "process") {

        statusNow = "On Process"

    } else if (status === "pickup") {

        statusNow = "Ready to Pickup"

    }

    const handleOrderDone = async () => {

        try {

            setLoading(true);
            const response = await fetch("/api/user/order/update", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    status: "complete",
                }),
            })

            setLoading(false);
            if (!response.ok) {

                const data = await response.json();
                alert(data.error || "Failed to update history");

            }

            // refresh page
            window.location.reload();

        } catch (error) {

            setLoading(false);
            console.error(error)

        }
    }

    return (
        <>
            <Card className="w-full max-w-full flex-row bg-only-dark-gray text-only-white">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 rounded-r-none"
                >
                    <Image
                        src={image}
                        alt="card-image"
                        width={1024}
                        height={768}
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className="w-3/5 p-3">
                    <div>
                        <div className="text-only-white font-bold text-sm lg:text-lg">{menuName}</div>
                        <div className="text-only-white font-bold text-xs lg:text-sm mb-2">{vendorName}</div>
                        <p className="text-only-gray text-[10px] lg:text-xs">Note: {note}</p>
                        <div className="flex pt-2 gap-2">
                            <div className="flex items-center justify-between bg-only-purple rounded">
                                <p className="text-xs font-bold text-center p-1">{statusNow}</p>
                            </div>
                            {
                                status === "pickup" ?
                                    <div className="text-only-white">
                                        <Checkbox
                                            crossOrigin
                                            label="Click when done"
                                            color="purple"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                            labelProps={{
                                                className: "text-only-white text-xs p-2"
                                            }}
                                            onChange={handleOrderDone}
                                        />
                                    </div> :
                                    <></>
                            }

                        </div>
                    </div>
                </CardBody>
            </Card>

            {
                loading ?
                    <>
                        <div className="fixed h-full w-full backdrop-blur-md inset-0 flex items-center justify-center z-50">
                            <Spinner className="text-only-white h-10 w-10" />
                        </div>
                    </> :
                    <></>
            }
        </>
    )
}