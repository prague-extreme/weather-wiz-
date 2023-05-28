import Day from "./Day"
import Link from 'next/link';

function Foreleft({data}) {
  return (
    <div className="flex flex-col gap-5 px-6 py-6 w-3/4 mr-4 border-4 rounded-2xl backdrop-blur-sm border-zinc-600 border-opacity-40">
            <div className="flex justify-between items-center px-3">
              <h1 className="text-2xl">Date</h1>
              <h1 className="text-3xl">Forecast</h1>
              <Link href="/">
                <h1 className="px-2 py-1 text-md border-2 rounded-md border-zinc-600 border-opacity-40 bg-zinc-600 bg-opacity-30 hover:bg-opacity-60">↤ Back</h1>
              </Link>
            </div>
            <Day data={data} day={0} borderVar={1} />
            <Day data={data} day={1} borderVar={1} />
            <Day data={data} day={2} borderVar={1} />
            {/* <Day data={data} day={4} borderVar={1} />
            <Day data={data} day={5} borderVar={0} /> */}
            
        </div>
  )
}

export default Foreleft
