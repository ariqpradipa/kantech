import {
    Card,
    CardHeader,
    CardBody
} from "@material-tailwind/react"

export default function VendorList({ props }: any) {

    let { name, description, image, rating } = props

    rating === "" || rating === 0 || rating === null ? "-" : parseInt(rating, 10)

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
                    <div className="w-full">
                        <div>
                            <div className="text-only-white font-bold text-sm lg:text-lg mb-2">{name}</div>
                            <p className="text-only-gray text-[10px] lg:text-xs">{description}</p>
                            <div className="flex pt-2">
                                <div className="flex items-center justify-between bg-only-purple rounded ">
                                    <i className="fa-solid fa-star fa-xs text-center p-1 pl-2"></i>
                                    <p className="text-xs font-bold text-center p-1 pr-2">{rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}