import Foreleft from "@/components/Foreleft" 
import Right from "@/components/Right"

export default function temp({data, location, loading, setLocation}) {
        
  return (
    data && <div className="flex px-8 justify-center flex-1 items-center">
      <Foreleft data={data} />
      <Right location={location} setLocation={setLocation} data={data} loading={loading} />
    </div>
  )
}


