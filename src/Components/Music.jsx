import React from 'react'

function Music({values,setFav}) {
    const {image,name,artist,added}=values;
    return (
        <div className='mt-6 relative w-60 p-4 bg-zinc-200 rounded-md flex gap-4 pb-8'>
            <div className='w-20 h-20 bg-orange-400 rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover' src={image}></img>
            </div>
            <div className=''>
                <h1 className='text-xl leading-none font-semibold'>{name}</h1>
                <h3 className='text-sm '>{artist}</h3>
            </div>
            <button onClick={setFav} className={`px-4 px-3 rounded-full bottom-0 whitespace-nowrap  left-1/2 -translate-x-[50%] translate-y-[50%] ${added?"bg-sky-500":"bg-orange-500"} text-white text-sm absolute`}>{added? "Favourite":"Add to Favourites"}</button>
        </div>
    );
}

export default Music;