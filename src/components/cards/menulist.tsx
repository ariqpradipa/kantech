import { useState } from "react";
import {
    Dialog,
    DialogBody,
    DialogFooter,
    Card,
    CardHeader,
    CardBody,
    Button,
    Spinner,
} from "@material-tailwind/react";
import jwt from "jsonwebtoken";

export default function MenuList({ props }: any) {

    let { id: menu_id, vendor_id, name, description, price, rating, photo_url: image } = props

    rating = rating === "" || rating === 0 || rating === null ? "-" : parseInt(rating, 10)

    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    function formatCurrency(value: string | number): string {
        const numberValue = typeof value === 'string' ? parseFloat(value) : value;

        const formattedValue = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(numberValue);

        return formattedValue;
    }

    const handleOpenDialog = (value: any) => {
        setOpenDialog(!openDialog);
    };

    const handlePesan = async (value: any) => {

        setOpenDialog(false);

        try {

            setLoading(true);
            const response = await fetch("/api/user/order/add", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    vendor_id,
                    menu_id,
                }),
            })

            setLoading(false);
            if (response.ok) {

                window.location.href = "/user/orders";

            } else {

                const data = await response.json();
                alert(data.error || "Failed to make order");

            }
        } catch (error) {

            setLoading(false);
            console.error(error)

        }
    }

    return (
        <>
            <a className="cursor-pointer" onClick={() => setOpenDialog(true)}>
                <Card className="w-full max-w-full flex-row bg-only-dark-gray">
                    <CardBody className="w-3/5">
                        <div className="w-full">
                            <p className="text-only-white font-bold text-sm lg:text-lg mb-2">{name}</p>
                            <p className="text-only-gray text-[10px] lg:text-xs pb-1">{description}</p>
                            <p className="text-only-white font-bold text-sm lg:text-base mb-2">{formatCurrency(price)}</p>
                            <div className="flex pt-2">
                                <div className="flex items-center justify-between bg-only-purple rounded ">
                                    <i className="fa-solid fa-star fa-xs text-center p-1 pl-2 text-only-white" />
                                    <p className="text-xs font-bold text-center p-1 pr-2 text-only-white">{rating}</p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-2/5 rounded-l-none"
                    >
                        <img
                            src={image}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                </Card>
            </a>

            <Dialog
                open={openDialog}
                size={"sm"}
                handler={handleOpenDialog}
                className="bg-only-dark-gray"
            >
                <DialogBody>
                    <div className="p-2 lg:p-5">
                        <div className="pb-5">
                            <img
                                className="w-full object-cover object-center rounded-xl"
                                src={image}
                                alt="nature image"
                            />
                        </div>

                        <p className="text-only-white font-bold text-lg lg:text-xl mb-2">{name}</p>
                        <p className="text-only-gray text-xs lg:text-sm mb-4">{description}</p>
                        <p className="text-only-white font-bold text-lg lg:text-xl">{formatCurrency(price)}</p>

                    </div>
                </DialogBody>
                <DialogFooter>
                    <div className="flex flex-row mx-auto gap-5 w-full px-2">
                        <Button className="bg-transparent" onClick={() => setOpenDialog(false)} fullWidth>
                            <span className="text-only-white">batal</span>
                        </Button>
                        <Button className="bg-only-purple" onClick={handlePesan} fullWidth>pesan</Button>
                    </div>
                </DialogFooter>
            </Dialog>

            {
                loading ?
                    <>
                        <div className="fixed inset-0 w-full flex items-center justify-center">
                            <Spinner className="text-only-white h-10 w-10" />
                        </div>
                    </> :
                    <></>
            }
        </>
    );
}