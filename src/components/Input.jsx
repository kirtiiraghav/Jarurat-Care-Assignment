import React from 'react'

export default function Input({ label, id, name, value, onChange }) {
    return (
        <div className='flex flex-col mb-5 relative '>
            <label className='text-sm' htmlFor={id}> {label} </label>
            <input onChange={onChange} value={value} className='border border-black h-7 px-1' name={name} id={id} />
        </div>
    )
}
