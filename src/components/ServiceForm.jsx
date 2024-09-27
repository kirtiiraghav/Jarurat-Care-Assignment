import React, { useState } from 'react'
import Input from './Input'
import DescriptionInput from './DescriptionInput'

export default function ServiceForm({ setServiceData, service, setService }) {
    // const [service, setService] = useState({
    //     name: '',
    //     description: '',
    //     price: ''
    // })

    const [errors, setErrors] = useState({})

    const validationConfig = {
        name: [{ required: true, message: 'Service name is required' }],
        description: [{ required: true, message: 'Description is required' }],
        price: [
            { required: true, message: 'Amount is required' },
            { numberPattern: /^-?(0|[1-9]\d*)$/, message: 'Amount should be in digits' }
        ]
    }

    const validateForm = (form) => {
        const errorsData = {}

        Object.entries(form).forEach(([key, value]) => {
            validationConfig[key].some((rule)=>{
                if(rule.required && !value){
                    errorsData[key] = rule.message
                    return true
                }

                if(rule.numberPattern && !rule.numberPattern.test(value)){
                    errorsData[key] = rule.message
                }
            })
        })

        setErrors(errorsData)
        return errorsData
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validateResult = validateForm(service)
        if (Object.keys(validateResult).length) {
            return
        }

        setServiceData((prevState) => [...prevState, { ...service, id: crypto.randomUUID() }])
        //reset form 
        setService({
            name: '',
            description: '',
            price: ''
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setService((prevState) => ({ ...prevState, [name]: value }))
        setErrors({})
    }


    return (
        <form className='w-full' onSubmit={handleSubmit}>
            <Input error={errors.name} onChange={handleChange} value={service.name} label='Service Name' id='name' name='name' />
            <DescriptionInput error={errors.description} onChange={handleChange} value={service.description} label='Description' id='desc' name='description' />
            <Input error={errors.price} onChange={handleChange} value={service.price} label='Price' id='price' name='price' />
            <button className='bg-black border text-white hover:text-black hover:border-black hover:bg-white w-full rounded p-1 text-center'>Add</button>
        </form>
    )
}
