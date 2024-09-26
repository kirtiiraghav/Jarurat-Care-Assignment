import React from 'react'
import Input from './Input'
import DescriptionInput from './DescriptionInput'

export default function ServiceForm() {
    return (
        <form>
            <Input label='Service Name' id='name' />
            <DescriptionInput label='Description' id='desc' />
            <Input label='Price' id='price' />
        </form>
    )
}
