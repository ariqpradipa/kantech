// export default function MenuList({ name, description, price, rating, image }: any) {

//     function formatCurrency(value: string | number): string {
//         const numberValue = typeof value === 'string' ? parseFloat(value) : value;

//         const formattedValue = new Intl.NumberFormat('id-ID', {
//             style: 'currency',
//             currency: 'IDR',
//             minimumFractionDigits: 0,
//         }).format(numberValue);

//         return formattedValue;
//     }

//     return (
//         <>
//             <div className="flex">
//                 <div className="flex flex-col justify-between leading-normal w-full bg-only-dark-gray px-4 py-3 rounded-l-xl min-w-[300px] max-w-sm lg:min-w-[300px]">
//                     <div>
//                         <p className="text-only-white font-bold text-sm lg:text-lg mb-2">{name}</p>
//                         <p className="text-only-gray text-[10px] lg:text-xs pb-1">{description}</p>
//                         <p className="text-only-white font-bold text-sm lg:text-base mb-2">{formatCurrency(price)}</p>
//                         <div className="flex pt-2">
//                             <div className="flex items-center justify-between bg-only-purple rounded ">
//                                 <i className="fa-solid fa-star fa-xs text-center p-1 pl-2" />
//                                 <p className="text-xs font-bold text-center p-1 pr-2">{rating}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex-none w-28 lg:w-32 bg-cover bg-center text-center rounded-r-xl" style={{ backgroundImage: `url(${image})` }}>
//                 </div>
//             </div>
//         </>
//     )
// }

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function MenuList() {
    return (
        <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    startups
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Lyft launching cross-platform service this week
                </Typography>
               
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
}