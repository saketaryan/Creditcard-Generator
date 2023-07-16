import React from 'react'
import "./Card.css";

const Card = (props) => {
    const {name, cardNumber, MM, YY} = props.card;
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
                    {cardNumber}
                </div>
                <div className='flex justify-between w-100'>
                    <h5 className='details'>{name}</h5>
                    <h5 className='details'>{MM}/{YY}</h5>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card