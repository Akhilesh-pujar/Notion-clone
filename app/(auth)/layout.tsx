const Rootlayout = ({
    children
}:{
    children : React.ReactNode;
})=>{
    return (

        <div className="h-full bg-red-300">
            {children}
        </div>
    )
}

export default Rootlayout;