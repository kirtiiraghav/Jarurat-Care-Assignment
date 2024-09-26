import React from 'react'
import Input from './Input'
import DescriptionInput from './DescriptionInput'

export default function ServiceForm() {
    return (
        <form className='w-full'>
            <Input label='Service Name' id='name' />
            <DescriptionInput label='Description' id='desc' />
            <Input label='Price' id='price' />
            <button className='bg-gray-300 w-full rounded p-1 text-center'>Add</button>
        </form>
    )
}
