import React from 'react'

export default function Input({ label, id }) {
    return (
        <div className='flex flex-col mb-5 relative '>
            <label className='text-sm' htmlFor={id}> {label} </label>
            <input className='border border-black h-7 px-1' name="" id={id} />
        </div>
    )
}
