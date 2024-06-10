import React from 'react'

export default function page() {
  return (
    <div className='border-[2px] border-[var(--primary-color)] p-4 rounded-sm w-full my-4 text-xl'>
      <div className='flex justify-between'>
        <div className='flex flex-1'>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' className='w-full outline-none bg-transparent border-dotted border-b-[3px] border-[var(--primary-color)] pb-0 px-4' />
        </div>
        <div className='flex flex-1flex flex-1'>
          <label htmlFor='address'>Address:</label>
          <input id='address' type='text' className='w-full outline-none bg-transparent border-dotted border-b-[3px] border-[var(--primary-color)] pb-0 px-4' />
        </div>
      </div>
      <div className='flex justify-between my-4'>
        <div className='flex flex-1'>
          <label htmlFor='age/sex'>Age/Sex:</label>
          <input id='age/sex' type='text' className='w-full outline-none bg-transparent border-dotted border-b-[3px] border-[var(--primary-color)] pb-0 px-4' />
        </div>
        <div className='flex flex-1'>
          <label className='text-nowrap' htmlFor='wardbed'>Ward Bed No:</label>
          <input id='wardbed' type='text' className='w-full outline-none bg-transparent border-dotted border-b-[3px] border-[var(--primary-color)] pb-0 px-4' />
        </div>
        <div className='flex flex-1'>
          <label htmlFor='opd'>OPD:</label>
          <input id='opd' type='text' className='w-full outline-none bg-transparent border-dotted border-b-[3px] border-[var(--primary-color)] pb-0 px-4' />
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-1'>
          <label className='text-nowrap' htmlFor='refferedby'>Reffered by Dr:</label>
          <input id='refferedby' type='text' className='w-full outline-none bg-transparent border-dotted border-b-[3px] border-[var(--primary-color)] pb-0 px-4' />
        </div>
        <div className='flex flex-1'>
          <label htmlFor='date'>Date:</label>
          <input id='date' type='text' className='w-full outline-none bg-transparent border-dotted border-b-[3px] border-[var(--primary-color)] pb-0 px-4' />
        </div>
      </div>
    </div>
  )
}
