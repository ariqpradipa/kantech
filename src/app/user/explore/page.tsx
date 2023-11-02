"use client";
import Link from "next/link";

import AppBar from '@/components/menu/appbar'
import VendorList from '@/components/cards/vendorlist'

export default function Explore() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col m-4 overflow-hidden">

                    <div className="flex mb-10">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">KanTech</h1>
                            <div className="flex p-1 bg-only-purple" />
                            <text>Mau makan apa hari ini?</text>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mx-auto space-y-6 mb-20'>
                        <Link href="/user/auth/login">
                            <VendorList
                                vendorName="Rumah Bu Jepe"
                                vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque"
                                vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                                vendorRating="4.7"
                            />
                        </Link>
                        <VendorList
                            vendorName="Rumah Bu Jepe 2"
                            vendorDescription="Lorem ipsum dolor sit amehil."
                            vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            vendorRating="3.1"
                        />
                        <VendorList
                            vendorName="Rumah Bu Jepe 3"
                            vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                            vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            vendorRating="1.2"
                        />
                        <VendorList
                            vendorName="Rumah Bu Jepe 4"
                            vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                            vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            vendorRating="5.0"
                        />
                        <VendorList
                            vendorName="Rumah Bu Jepe 5"
                            vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                            vendorImage="https://awsimages.detik.net.id/community/media/visual/2023/02/16/resep-bubur-ayam-cincang-dan-sayuran_43.jpeg"
                            vendorRating="2.6"
                        />
                    </div>
                </div>
                <AppBar activeButton="explore" />
            </div>
        </>
    )
}