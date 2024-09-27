import React from 'react'

export default function Input({ label, id, name, value, onChange, error }) {
    return (
        <div className='flex flex-col mb-7 relative'>
            <label className='text-sm' htmlFor={id}> {label} </label>
            <input onChange={onChange} value={value} className='border border-black h-7 px-1' name={name} id={id} />
            <p className='text-red-500 text-xs absolute top-[100%] '>{error}</p>
        </div>
    )
}
