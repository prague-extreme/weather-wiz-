import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import Nodata from '@/components/Nodata';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProp }) {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState({
    coordinates : {
      lat: "28.52",
      long: "77.13"
    },
  });
  const [loading ,setLoading] = useState(false)
  const router = useRouter();

  const xx = async (city) => {
        //console.log(city)
        setLoading(true)
        const response = await fetch(`https://geocode.maps.co/search?q=${city}`);
        const data = await response.json();
        console.log(data)
        
        if (data.length == 0) 
        {
          setLocation({
            coordinates : {
              lat : "28.52",
              long : "77.13"
            }
          })
          setLoading(false)
          router.push('/error'); // Navigate to another page
        }

        else
        {
          const latitude = data[0].lat;
          const longitude = data[0].lon;
          setLocation({
            coordinates : {
              lat : latitude,
              long : longitude
            }
          })
          setLoading(false)
        }
        //console.log(latitude);
        //console.log(longitude)
    
  }

 
  useEffect(() => {
    function getLocation() {

      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
  
        } else {
          reject(new Error('Geolocation is not supported by this browser.'));
        }
      });
    }
  
    getLocation()
        .then((position) => {
          //setLatitude(position.coords.latitude);
          //setLongitude(position.coords.longitude);
          console.log(loading)
          setLocation({
            coordinates : {
              lat : position.coords.latitude,
              long : position.coords.longitude
            }
          })
          console.log(coordinates);
        })
        .catch(() => {
          setLocation({
            coordinates : {
              lat : "28.52",
              long : "77.13"
            }
          })
        });
  },[])
  useEffect(() => {
    const call = async () => {
      setLoading(true)
      const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3dfd9e33fb234a6ab7f90732231904&q=${location.coordinates.lat},${location.coordinates.long}&days=7&aqi=yes&alerts=no`);
      const tempres = await res.json();
      setData(tempres);
      setLoading(false)
    }
    call()
    
  }, [location])

  return (
    <main className='w-full h-screen flex flex-col font-myFont'>

      <Navbar xx={xx}/>
      <Component data={data} location={location} setLocation={setLocation} loading={loading} />
    </main>
  )
}
