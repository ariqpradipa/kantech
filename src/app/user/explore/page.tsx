import AppBar from '@/components/menu/appbar'
import VendorList from '@/components/cards/vendorlist'

export default function Explore() {
    return (
        <>
            <div>
                <AppBar activeButton="explore" />
            </div>
            <div className="flex flex-col mx-auto m-5">
                <div className="flex mb-10">
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-bold">KanTech</h1>
                        <div className="flex p-1 bg-only-purple" />
                    </div>
                </div>
                <div className='flex flex-col justify-center mx-auto space-y-5'>
                    <VendorList
                        vendorName="Rumah Bu Jepe"
                        vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                        vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                    />
                    <VendorList
                        vendorName="Rumah Bu Jepe 2"
                        vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                        vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                    />
                    <VendorList
                        vendorName="Rumah Bu Jepe 3"
                        vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                        vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                    />
                    <VendorList
                        vendorName="Rumah Bu Jepe 4"
                        vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                        vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                    />
                </div>
            </div>
        </>
    )
}