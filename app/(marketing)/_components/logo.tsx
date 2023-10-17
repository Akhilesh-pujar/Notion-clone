import Image from "next/image";


import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets:["latin"],
    weight:["400","600"]
});

export const Logo = () =>{
    return (
        <div className="hidden md:flex items-center gap-x-2">

            <Image
            src="next.svg"
          
            alt="logo"
            height="40"
            width="40"
            className="dark:hidden"
            />
              {/* <Image
            src="next.svg"
          
            alt="logo"
            height="40"
            width="40"
            className="dark:hidden"
            /> */} 
            {/* in dark theme if you want ur logo to be visible then add here */}

            <p className={cn("font-semibold", font.className)}>
                Notion</p>

        </div>
    )
}