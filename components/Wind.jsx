function Wind({data}) {
    return (
        <div className="backdrop-blur-sm h-64 rounded-2xl flex-1 border-4 px-4 border-zinc-600 border-opacity-40">

            <div className="flex justify-between  items-center pt-1">
                <img src="/wind.png" className="object-scale-down h-12 w-12 filter invert" alt="" />
                <h1 className="text-4xl font-extrabold justify-center ">Wind</h1>
                <h1 className="">Direction: {data.current.wind_dir}</h1>
            </div>
            <div className="grid grid-cols-2 gap-8 place-content-center pt-8">
                <div className="flex flex-col  items-center">
                    <h1 className="">Wind Speed</h1>
                    <span className="text-3xl">{data.current.wind_kph}<span className="text-xs">kmph</span></span>
                </div><div className="flex flex-col  items-center">
                    <h1 className="">Wind Degree</h1>
                    <span className="text-3xl">{data.current.wind_degree}°</span>
                </div><div className="flex flex-col  items-center">
                    <h1 className="">Wind Gust</h1>
                    <span className="text-3xl">{data.current.gust_kph}<span className="text-xs">kmph</span></span>
                </div><div className="flex flex-col  items-center">
                    <h1 className="">Wind Chill</h1>
                    <span className="text-3xl">{data.forecast.forecastday[0].hour[0].windchill_c}°<span className="text-sm">C</span></span>
                </div>
            </div>
            
        </div>
    )
}
export default Wind
