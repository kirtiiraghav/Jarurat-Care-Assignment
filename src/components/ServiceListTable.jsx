import React, { useState } from 'react'

export default function ServiceListTable({ serviceData, setServiceData, setService, setEditRowId }) {

    return (
        <table className="w-full border-collapse mt-[17px]">
            <thead>
                <tr>
                    <th className='border-b border-black'>Service Name</th>
                    <th className='border-b border-black'>Description</th>
                    <th className='border-b border-black'>
                        <div className="flex">
                            <span className='mr-2'>Price</span>
                        </div>
                    </th>
                    <th className='border-b border-black'></th>
                </tr>
            </thead>
            <tbody>
                {serviceData.map((data) => {
                    return <tr key={data.id}  >
                        <td className='border-b border-black p-1'>{data.name}</td>
                        <td className='border-b border-black p-1'>{data.description}</td>
                        <td className='border-b border-black p-1'>₹{data.price}</td>
                        <td className='border-b border-black p-1'>
                            <div className='flex items-center justify-center gap-2'>

                                {/* edit */}
                                <button onClick={() => {
                                    const { name, description, price } = serviceData.find(({ id }) => data.id === id)
                                    setService({ name, description, price })
                                    setEditRowId(data.id)
                                }}
                                    className='bg-black text-white p-2 rounded hover:bg-white hover:text-black hover:border-black border my-2'>Edit</button>

                                {/* delete */}
                                <button onClick={() => {
                                    setServiceData((prevState) => {
                                        return prevState.filter((service) => {
                                            return data.id !== service.id
                                        })
                                    })
                                }
                                } className=' hover:text-red-600'>Delete</button>
                            </div>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
