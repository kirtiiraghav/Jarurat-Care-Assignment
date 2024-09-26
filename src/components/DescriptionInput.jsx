import React from 'react'

export default function DescriptionInput({ label, id }) {
    return (
        <div className='flex flex-col mb-5 relative'> 
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                className="border-[1px] border-black px-1"
                rows="4"
            />
        </div>
    )
}
