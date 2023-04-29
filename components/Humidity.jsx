function Humidity({data}) {
    return (
        <div className="backdrop-blur-sm h-64 rounded-2xl flex-1 border-4 px-4 border-zinc-600 border-opacity-40">
            <div className="flex justify-between gap-16 items-center">
                <img src="/humid.png" className="object-scale-down h-12 w-12 filter invert" alt="" />
                <h1 className="text-4xl font-extrabold">Humidity</h1>
                <h1 className="">{data.current.cloud}% <span className="pd-3 text-xs">Clouds</span> </h1>
            </div>
            <div className="grid grid-cols-2 gap-8 place-content-center pt-8">
                <div className="flex flex-col  items-center">
                    <h1 className="">Humidity</h1>
                    <span className="text-3xl">{data.current.humidity}<span className="text-xs">%</span></span>
                </div>
                <div className="flex flex-col  items-center">
                    <h1 className="">Pressure</h1>
                    <span className="text-3xl">{data.current.pressure_in}<span className="text-xs">in</span> </span>
                </div>
                <div className="flex flex-col  items-center">
                    <h1 className="">Visibility</h1>
                    <span className="text-3xl">{data.current.vis_km}<span className="text-xs">kms</span> </span>
                </div>
                <div className="flex flex-col  items-center">
                    <h1 className="">UV Index</h1>
                    <span className="text-3xl">{data.current.uv}</span>
                </div>
            </div>

        </div>
    )
}
export default Humidity
