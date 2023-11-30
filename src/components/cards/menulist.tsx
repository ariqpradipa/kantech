import { useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Card,
    CardHeader,
    CardBody,
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export default function MenuList({ name, description, price, rating, image }: any) {

    const [openDialog, setOpenDialog] = useState(false);

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

    return (
        <>
            <a className="cursor-pointer" onClick={() => setOpenDialog(true)}>
                <Card className="w-full max-w-full flex-row bg-only-dark-gray">
                    <CardBody className="w-full max-w-full min-w-fit">
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
                        className="m-0 w-2/6 shrink-0 rounded-l-none"
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
                                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
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
                        <Button className="bg-only-purple" fullWidth>pesan</Button>
                    </div>
                </DialogFooter>
            </Dialog>
        </>
    );
}