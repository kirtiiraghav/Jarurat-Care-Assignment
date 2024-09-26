import React, { useState } from 'react'
import Input from './Input'
import DescriptionInput from './DescriptionInput'

export default function ServiceForm({ setServiceData }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setServiceData((prevState) =>
            [...prevState,
            { name, description, price, id: crypto.randomUUID() }
            ]
        )

        //reset form 
        setName('')
        setDescription('')
        setPrice('')
    }

    return (
        <form className='w-full' onSubmit={handleSubmit}>
            <Input onChange={(e) => setName(e.target.value)} value={name} label='Service Name' id='name' name='name' />
            <DescriptionInput onChange={(e) => setDescription(e.target.value)} value={description} label='Description' id='desc' name='description' />
            <Input onChange={(e) => setPrice(e.target.value)} value={price} label='Price' id='price' name='price' />
            <button onClick={handleSubmit} className='bg-gray-300 w-full rounded p-1 text-center'>Add</button>
        </form>
    )
}
