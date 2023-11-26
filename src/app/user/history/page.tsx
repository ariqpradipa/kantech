"use client";
import AppBar from '@/components/menu/appbar'
import HistoryList from '@/components/cards/historylist'

export default function History() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col m-4 overflow-hidden">

                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-6xl lg:text-6xl font-bold mb-2">History</h1>
                            <div className="flex p-1 bg-only-purple" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mx-auto space-y-6 mb-20 w-full'>
                        <HistoryList
                            orderDate="1698937067"
                            menuName="Bubur Ayam"
                            vendorName="Rumah Bu Jepe"
                            image="https://asset.kompas.com/crops/Kyp-MBp3Kf0PLGveth_zzhU2gfI=/0x0:1000x667/750x500/data/photo/2020/07/11/5f09e008e7fee.jpg"
                            note="tidak pakai sambel sama sekali"
                            status="Process"
                            rating=""
                            review=""
                        />
                        <HistoryList
                            orderDate="1698937067"
                            menuName="Bubur Ayam madura"
                            vendorName="Rumah Bu Jepe 2"
                            image="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            note="tidak pakai sambel sama sekali"
                            status="Process"
                            rating="2"
                            review=""
                        />
                        <HistoryList
                            orderDate="1698937067"
                            menuName="Bubur Ayam pedas"
                            vendorName="Rumah Bu Jepe 3"
                            image="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            note="tidak pakai sambel sama sekali"
                            status="Process"
                            rating="3"
                            review="Makanannya kaya sampah, lain kali di kasih sampah beneran aja"
                        />
                    </div>
                </div>
                <AppBar activeButton="history" />
            </div>
        </>
    )
}