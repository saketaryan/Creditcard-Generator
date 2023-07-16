import React from 'react'

const Card = () => {
  return (
    <>
        <div className='card rounded-md'>
            <div className='upper h-60 flex justify-center'>
                <div className='w-80 mt-2 flex'>
                    <div className='rounded-full bg-white w-3r h-3r'>
                    </div>
                    <div className='rounded-full border-white w-2r h-2r m-1'>
                    </div>
                </div>
            </div>
            <div className='lower h-40 flex justify-center'>
                <div className='w-80'>
                <div className='text-center text-xl ls-4'>
                    0000 0000 0000 0000
                </div>
                <div className='flex justify-between w-100'>
                    <h5 className='details'>JANE APPRATHEID</h5>
                    <h5 className='details'>12/24</h5>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card