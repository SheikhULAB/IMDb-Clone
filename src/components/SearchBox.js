"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5 '>
            <input
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
             type="text" 
             placeholder='Search Keywords...' />

             <button 
             disabled={!search}
             className='text-amber-600 disabled:text-gray-400'
             type='submit'>Search</button>
        </form>
    );
};

export default SearchBox;