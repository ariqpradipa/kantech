export default function VendorList({ name, description, image, rating }: any) {
    return (
        <>
            <div className="w-full max-w-full flex">
                <div className="flex-none w-28 lg:w-32 bg-cover bg-center text-center rounded-l-xl" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="flex flex-col justify-between leading-normal w-full bg-only-dark-gray px-4 py-3 rounded-r-xl">
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
            </div>
        </>
    )
}