export default function VendorList({ vendorName, vendorDescription, vendorImage, vendorRating }: any) {
    return (
        <>
            <div className="w-full max-w-full flex">
                <div className="flex-none w-28 lg:w-32 bg-cover bg-center text-center rounded-l-xl" style={{ backgroundImage: `url(${vendorImage})` }}>
                </div>
                <div className="flex flex-col justify-between leading-normal w-full bg-only-dark-gray px-4 py-3 rounded-r-xl">
                    <div>
                        <div className="text-only-white font-bold text-sm lg:text-lg mb-2">{vendorName}</div>
                        <p className="text-only-gray text-[10px] lg:text-xs">{vendorDescription}</p>
                        <div className="flex pt-2">
                            <div className="flex items-center justify-between bg-only-purple rounded ">
                                <i className="fa-solid fa-star fa-xs text-center p-1 pl-2"></i>
                                <text className="text-xs font-bold text-center p-1 pr-2">{vendorRating}</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="flex-none h-48 lg:h-auto lg:w-48 bg-cover bg-center text-center rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" style={{ backgroundImage: `url(${vendorImage})` }}>
                </div>
                <div className="bg-only-dark-gray p-4 flex flex-col justify-between leading-normal rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl">
                    <div className="mb-8">
                        <div className="text-only-white font-bold text-lg mb-2">{vendorName}</div>
                        <p className="text-only-gray text-xs">{vendorDescription}</p>
                    </div>
                    <div className="flex">
                        <div className="flex items-center justify-center py-1 px-4 bg-only-purple rounded">
                            <text className="text-sm font-bold text-center">{vendorRating}</text>
                        </div>
                    </div>

                </div>
            </div> */}
        </>
    )
}