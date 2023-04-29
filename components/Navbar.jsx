import React , {useState} from 'react'
import Link from 'next/link'
function Navbar({xx}) {
    const [searchQuery , setSearchQuery] = useState('')
    return (
        <nav className="flex text-2xl backdrop-blur-sm px-10 py-3 border-b-2 justify-between items-center bg-zinc-600 bg-opacity-20 border-zinc-600 border-opacity-40">
            <div className="text-white hover:text-zinc-100 hover:text-opacity-70">
                <Link href="/">WeatherWiz</Link>
            </div>
            <div className="flex backdrop-blue-sm items-center justify-center">
                <input type="text"  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="text-xs w-48 bg-transparent border border-zinc-400 border-opacity-60 rounded-md px-3 h-7" />
                <button onClick={() => xx(searchQuery)} type="submit" className="h-7 inline-flex items-center py-1.5 px-3 ml-1 text-sm font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" className="" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                </button>
            </div>
        </nav>
    )
}

export default Navbar
