"use client";

import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button'

import { useConvexAuth } from "convex/react";

import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";


export const Heading = ()=>{
    const {isAuthenticated,isLoading} = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl 
            font-bold
            ">
                Your Ideas, Documents , & Plans.
                Unified, Welcom to <span className="underline">Notion</span>
            </h1>

            <h3 className="text-base sm:text-xl md:text-2xl
            font-medium
            ">
                Notion is the connected workspace where <br></br>
                better, faster work happens
            </h3>
            {isLoading &&(
                <div className="w-full flex items-center justify-center">
                     <Spinner size="lg"/>
                 </div>
               
            )}
            {isAuthenticated && !isLoading &&(
                  <Button asChild>
                    <Link href="/documents">
                    Enter notion <ArrowRight className="h-4 w-4 ml-2"/>
                    
                    </Link>
                    </Button>

            )}

            {!isAuthenticated && !isLoading &&(
                <SignInButton mode="modal">
                    <Button>
                        Get notion for free
                        <ArrowRight className="h-4 w-4 ml-2"/>

                    </Button>
                   </SignInButton>
            )}

          

        </div>
    )
}