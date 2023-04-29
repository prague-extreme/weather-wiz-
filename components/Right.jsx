import City from "./City"
import React, { useState } from "react"


function Right({ location, setLocation, data, loading}) {
    const changeLocTokyo = () => {
        setLocation({
            coordinates: {
                lat: "35.67",
                long: "139.65"
            }
        })
    }
    const changeLocLondon = () => {
        setLocation({
            coordinates: {
                lat: "51.50",
                long: "0.12"
            }
        })
    }
    const changeLocNew = () => {
        setLocation({
            coordinates: {
                lat: "40.71",
                long: "-74.00"
            }
        })
    }
    const changeLocParis = () => {
        setLocation({
            coordinates: {
                lat: "48.85",
                long: "2.35"
            }
        })
    }
    const changeLocMumbai = () => {
        setLocation({
            coordinates: {
                lat: "19.07",
                long: "72.83"
            }
        })
    }
    const changeLocToronto = () => {
        setLocation({
            coordinates: {
                lat: "43.6532",
                long: "-79.3832"
            }
        })
    }
    const changeLocAmsterdam = () => {
        setLocation({
            coordinates: {
                lat: "52.36",
                long: "4.90"
            }
        })
    }
    const changeLocChicago = () => {
        setLocation({
            coordinates: {
                lat: "41.87",
                long: "-87.62"
            }
        })
    }
    const changeLocBangkok = () => {
        setLocation({
            coordinates: {
                lat: "13.75",
                long: "100.50"
            }
        })
    }
    const changeLocDelhi = () => {
        setLocation({
            coordinates: {
                lat: "28.61",
                long: "77.20"
            }
        })
    }
    const changeLocSan = () => {
        setLocation({
            coordinates: {
                lat: "37.77",
                long: "-122.41"
            }
        })
    }
    const changeLocMoscow = () => {
        setLocation({
            coordinates: {
                lat: "55.75",
                long: "37.61"
            }
        })
    }



    return (
        <div className="flex flex-col gap-8 w-1/4 flex-shrink-0 pl-4 ">
            <div className="flex flex-col border-4 rounded-2xl backdrop-blur-sm border-zinc-600 border-opacity-40">
                <div className="flex flex-col items-center ">
                    <h1 className="text-4xl font-extrabold py-7">Other Top Cities</h1>
                </div>
                <div className="grid grid-cols-3 items-center p-5 gap-4 ">
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocTokyo} >
                        <City city={"Tokyo"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocLondon} >
                        <City city={"London"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocNew} >
                        <City city={"New York"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocParis} >
                        <City city={"Paris"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocMumbai} >
                        <City city={"Mumbai"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocToronto} >
                        <City city={"Toronto"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocAmsterdam} >
                        <City city={"Amsterdam"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocChicago} >
                        <City city={"Chicago"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocBangkok} >
                        <City city={"Bangkok"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocDelhi} >
                        <City city={"Delhi"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocSan} >
                        <City city={"San Francisco"} />
                    </a>
                    <a className="hover:bg-zinc-600 hover:rounded-lg hover:bg-opacity-50 transition" href="#" onClick={changeLocMoscow} >
                        <City city={"Moscow"} />
                    </a>
                </div>
            </div>
            <div className="flex flex-col border-4 rounded-2xl h-32 mb-10 gap-3 backdrop-blur-sm border-zinc-600 border-opacity-40">
                <div className="flex items-center justify-center gap-5 pt-2 px-3">
                    <h1 className="text-2xl font-extrabold">Air Quality Index</h1>
                    <h1 className=""><span className="text-2xl">{data.current.air_quality["us-epa-index"]} </span><span className="text-md">US - EPA</span></h1>
                </div>
                {!loading && 
                <div className="flex w-full mb-5 text-sm px-6 justify-center gap-3">
                    <div className="flex flex-col items-start">
                        <span>CO: <span className="">{data.current.air_quality.co.toFixed(1)}</span> μg/m3</span>
                        <span>O₃: <span className="">{data.current.air_quality.o3.toFixed(1)}</span> μg/m3</span>
                        <span>NO₂: <span className="">{data.current.air_quality.no2.toFixed(1)}</span> μg/m3</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span>SO₂: <span className="">{data.current.air_quality.so2.toFixed(1)}</span> μg/m3</span>
                        <span>PM 2.5: <span className="">{data.current.air_quality["pm2_5"].toFixed(1)}</span> μg/m3</span>
                        <span>PM 10: <span className="">{data.current.air_quality.pm10.toFixed(1)}</span> μg/m3</span>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Right
