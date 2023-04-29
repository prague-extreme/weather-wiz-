import React from 'react'

function Day({data, day, borderVar}) {
  return (
    <div className='flex flex-1  items-center justify-between gap-5'>
      <div className=''>
        <h1>{data.forecast.forecastday[day].date}</h1>
      </div>
      <div className='flex gap-12 items-center justify-between flex-1 pb-3'>
        <div className="flex flex-col w-full items-center">
          <span className="text-1xl">{data.forecast.forecastday[day].hour[3].temp_c}°<span className="text-xs">C</span></span>
          <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[day].hour[3].condition.icon}`} alt="" />
          <span className="text-xs">3:00 AM</span>
        </div>
        <div className="flex flex-col w-full items-center">
          <span className="text-1xl">{data.forecast.forecastday[day].hour[6].temp_c}°<span className="text-xs">C</span></span>
          <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[day].hour[6].condition.icon}`} alt="" />
          <span className="text-xs">6:00 AM</span>
        </div>
        <div className="flex flex-col w-full items-center">
          <span className="text-1xl">{data.forecast.forecastday[day].hour[9].temp_c}°<span className="text-xs">C</span></span>
          <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[day].hour[9].condition.icon}`} alt="" />
          <span className="text-xs">9:00 AM</span>
        </div>
        <div className="flex flex-col w-full items-center">
          <span className="text-1xl">{data.forecast.forecastday[day].hour[12].temp_c}°<span className="text-xs">C</span></span>
          <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[day].hour[12].condition.icon}`} alt="" />
          <span className="text-xs">12:00 AM</span>
        </div>
        <div className="flex flex-col w-full items-center">
          <span className="text-1xl">{data.forecast.forecastday[day].hour[15].temp_c}°<span className="text-xs">C</span></span>
          <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[day].hour[15].condition.icon}`} alt="" />
          <span className="text-xs">15:00 AM</span>
        </div>
        <div className="flex flex-col w-full items-center">
          <span className="text-1xl">{data.forecast.forecastday[day].hour[18].temp_c}°<span className="text-xs">C</span></span>
          <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[day].hour[18].condition.icon}`} alt="" />
          <span className="text-xs">18:00 AM</span>
        </div>
        <div className="flex flex-col w-full items-center">
          <span className="text-1xl">{data.forecast.forecastday[day].hour[21].temp_c}°<span className="text-xs">C</span></span>
          <img className="object-scale-down h-12 w-12" src={`https:/${data.forecast.forecastday[day].hour[21].condition.icon}`} alt="" />
          <span className="text-xs">21:00 AM</span>
        </div>
      </div>
    </div>
  )
}

export default Day
