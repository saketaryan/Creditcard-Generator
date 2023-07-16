import React from 'react'
import "./Card.css";

const CardBack = (props) => {

    const {cvc} = props.card;
  return (
    <>
        <div className='card card-back rounded-md'>
            <div className='upper flex justify-center'>
                <div className='bg-black h-3r bar'>
                    a
                </div>
            </div>
            <div className='lower flex justify-center'>
                <div className='w-80'>
                    <div className='gbar bg-gray'>
                        {cvc}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardBack