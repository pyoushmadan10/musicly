import React from 'react'

function Navbar({favdata}) {
    return (
        <div className='w-full px-10 py-3 flex justify-between items-center'>
            <h3>Musicly</h3>
            <div className='flex p-2 px-3 bg-orange-400 rounded-full text-white text-sm gap-2'>
                <h3>Favourites</h3>
                <h4>{favdata.filter(items=> items.added===true).length}</h4>
            </div>

        </div>
    );
}

export default Navbar;