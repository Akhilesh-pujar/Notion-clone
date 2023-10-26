"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle} from "lucide-react";
import { useMutation } from "convex/react";
import {toast} from "sonner";


import{api} from "@/convex/_generated/api"

const DocumentPage =() =>{
    const {user} = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = ()=>{
        const promise = create({title:"utitled"});
        toast.promise(promise,{
            loading:"Creating a new NOTE...",
            success:"New Note created",
            error:"Failed to create note."
        })
    }


    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
           <Image
           src="/empty.png"
           height="300"
           width="300"
           className="dark:hidden"
           alt="if there is no note then this pic"
           />
            <Image
           src="/empty-dark.png"
           height="300"
           width="300"
           className="hidden dark:block"
           alt="if there is no note then this pic"
           />

           <h2 className="text-lg font-medium">
            
            Welcome to {user?.firstName}&apos;s Notion</h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Crete your Task/Note
            </Button>
        </div>
    )
}

export default DocumentPage;