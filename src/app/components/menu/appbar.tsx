"use client";
import { IconButton } from "../material_tailwind/mtw";

export default function AppBar() {
    return (
        <>
            <div className="fixed bottom-0">
                <div className="flex p-6 rounded-t-lg bg-only-purple">
                    <div className="flex gap-4">
                        <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                            <i className="fa-solid fa-house" />
                        </IconButton>
                        <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                            <i className="fab fa-twitter text-lg" />
                        </IconButton>
                        <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                            <i className="fab fa-dribbble text-lg" />
                        </IconButton>
                        <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                            <i className="fab fa-github text-lg" />
                        </IconButton>
                        <IconButton >
                            <i className="fa-solid fa-house" />
                        </IconButton>
                        <IconButton  >
                            <i className="fa-solid fa-plus" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}