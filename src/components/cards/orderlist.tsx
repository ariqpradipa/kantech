export default function OrderList({ menuName, vendorName, note, status, image }: any) {
    return (
        <>

            <div className="w-full max-w-full flex">
                <div className="flex-none w-28 lg:w-32 bg-cover bg-center text-center rounded-l-xl" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="flex flex-col justify-between leading-normal bg-only-dark-gray px-4 py-3 rounded-r-xl">
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
                </div>
            </div>
        </>
    )
}