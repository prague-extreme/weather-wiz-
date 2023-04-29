import Time from "./Time"
import Wind from "./Wind"
import Humidity from "./Humidity"
import Loader from "./Loader"

function left({data, loading}) {
    if (loading) {
        return <Loader />;
      }

    return (
       
        <div className="flex flex-col gap-8 w-3/4 pr-4">
            <div className="text-1xl flex justify-between px-4 font-extrabold text-xl">
                <h1 className=""> {data.location.name}, {data.location.region}, {data.location.country}</h1>
                
                <h1 className="">Date: {data.location.localtime.slice(0,11)}, Current Time: {data.location.localtime.slice(11)} </h1>
            </div>
            <div className="">
                <Time data={data}/>
            </div>
            <div className="flex gap-8 w-full">
                    <Wind data={data} loading={loading} />
                    <Humidity data={data} loading={loading} />
            </div>
        </div>
    )
}

export default left
