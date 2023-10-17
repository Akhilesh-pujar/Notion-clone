import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10)=>{
    const [scrolled ,setscroll] = useState(false);

    useEffect(()=>{
    const handleScroll = () =>{
        if(window.scrollY > threshold){
            setscroll(true);
        }
        else{
            setscroll(false);
        }
    }
    window.addEventListener("scroll" ,  handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
    },[ threshold])
  

  return (
   scrolled
  )
}