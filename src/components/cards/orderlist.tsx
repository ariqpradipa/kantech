import {
    Card,
    CardHeader,
    CardBody
} from "@material-tailwind/react"

export default function OrderList({ menuName, vendorName, note, status, image }: any) {
    return (
        <>
            <Card className="w-full max-w-full flex-row bg-only-dark-gray text-only-white">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 rounded-r-none"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className="w-3/5 p-3">
                    <div>
                        <div className="text-only-white font-bold text-sm lg:text-lg">{menuName}</div>
                        <div className="text-only-white font-bold text-xs lg:text-sm mb-2">{vendorName}</div>
                        <p className="text-only-gray text-[10px] lg:text-xs">Note: {note}</p>
                        <div className="flex pt-2">
                            <div className="flex items-center justify-between bg-only-purple rounded">
                                <p className="text-xs font-bold text-center p-1">{status}</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}