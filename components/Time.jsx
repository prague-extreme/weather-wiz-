import Link from 'next/link';

function Time({ data }) {
    const d = new Date(data.location.localtime.slice(0, 11));
    let day = d.getDay();
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
        <Link href="/forecast">
            <div className="flex flex-col gap-6 w-full h-72 rounded-2xl px-4 backdrop-blur-sm  border-4 border-zinc-600 border-opacity-40 hover:bg-zinc-800 hover:rounded-1xl hover:bg-opacity-50 transition">
                <div className="flex justify-between gap-72 items-center">

                    <span className="">{weekdays[day]}</span>
                    <h1 className="text-4xl font-extrabold">Temperature  </h1>
                    <div className="flex items-center gap-2">
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.current.condition.icon}`} alt="" />
                        <span className="pr-2">{data.current.condition.text === "Moderate or heavy rain with thunder" ? "Rain" : data.current.condition.text}</span>
                    </div>

                </div>
                <div className="flex gap-8 justify-between">
                    <div className="flex flex-col items-center">
                        <h1>Current Temperature </h1>
                        <span className="text-3xl ">{data.current.temp_c}°<span className="text-sm">C</span></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1>Min Temperature </h1>
                        <span className="text-3xl ">{data.forecast.forecastday[0].day.mintemp_c}°<span className="text-sm">C</span></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1>Max Temperature </h1>
                        <span className="text-3xl">{data.forecast.forecastday[0].day.maxtemp_c}°<span className="text-sm">C</span></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1>Average Temperature </h1>
                        <span className="text-3xl">{data.forecast.forecastday[0].day.avgtemp_c}°<span className="text-sm">C</span></span>
                    </div>
                </div>



                <div className="flex flex-1 justify-between h-full w-full gap-8 py-3 ">
                    <div className="flex flex-col w-full items-center gap-1">
                        <span className="text-1xl">{data.forecast.forecastday[0].hour[3].temp_c}°<span className="text-xs">C</span></span>
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[0].hour[3].condition.icon}`} alt="" />
                        <span className="text-xs">3:00 AM</span>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1">
                        <span className="text-1xl">{data.forecast.forecastday[0].hour[6].temp_c}°<span className="text-xs">C</span></span>
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[0].hour[6].condition.icon}`} alt="" />
                        <span className="text-xs">6:00 AM</span>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1">
                        <span className="text-1xl">{data.forecast.forecastday[0].hour[9].temp_c}°<span className="text-xs">C</span></span>
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[0].hour[9].condition.icon}`} alt="" />
                        <span className="text-xs">9:00 AM</span>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1">
                        <span className="text-1xl">{data.forecast.forecastday[0].hour[12].temp_c}°<span className="text-xs">C</span></span>
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[0].hour[12].condition.icon}`} alt="" />
                        <span className="text-xs">12:00 AM</span>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1">
                        <span className="text-1xl">{data.forecast.forecastday[0].hour[15].temp_c}°<span className="text-xs">C</span></span>
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[0].hour[15].condition.icon}`} alt="" />
                        <span className="text-xs">15:00 AM</span>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1">
                        <span className="text-1xl">{data.forecast.forecastday[0].hour[18].temp_c}°<span className="text-xs">C</span></span>
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[0].hour[18].condition.icon}`} alt="" />
                        <span className="text-xs">18:00 AM</span>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1">
                        <span className="text-1xl">{data.forecast.forecastday[0].hour[21].temp_c}°<span className="text-xs">C</span></span>
                        <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[0].hour[21].condition.icon}`} alt="" />
                        <span className="text-xs">21:00 AM</span>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default Time
