function city({city}) {
    return (
        <div className="flex w-full border h-20 rounded-lg justify-center items-center px-2 border-zinc-400 border-opacity-60">
            <div className="flex ">
                <h1 className="text-sm">{city}</h1>
            </div>
        </div>
    )
}

export default city
