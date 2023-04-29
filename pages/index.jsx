import Left from '@/components/Left'
import Right from '@/components/Right'
import React, { useEffect, useState } from 'react'


export default function Home({data, location, setLocation, loading}) {
 

  return (
    data && <div className="flex  h-full px-8 items-center justify-between">
      <Left data={data} loading={loading} />
      <Right location={location} setLocation={setLocation} data={data} loading={loading} />
    </div>

  )
}
