import React from 'react'

export default function ServiceListTable({ serviceData }) {

    return (
        <table className="w-full border-collapse mt-[17px] self-start border border-black">
            <thead>
                <tr>
                    <th className='border border-black'>Service Name</th>
                    <th className='border border-black'>Description</th>
                    <th className='border border-black'>
                        <div className="flex">
                            <span className='mr-2'>Price</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {serviceData.map((data) => {
                    return <tr key={data.id}>
                        <td className='border border-black p-1'>{data.name}</td>
                        <td className='border border-black p-1'>{data.description}</td>
                        <td className='border border-black p-1'>₹{data.price}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
