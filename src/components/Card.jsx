import React from 'react'

export function Card({ img, title, desc, price, size, storage, bgColor,buttonColor,textColor, margin }) {
    return (
        <div className='w-full'>
            <div className={textColor + ' w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 ' + margin}>

                <img src={img} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
                <p className='text-center text-4xl font-bold'>{price}</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>{desc}</p>
                    <p className='py-2 border-b mx-8'>{size}</p>
                    <p className='py-2 border-b mx-8'>{storage}</p>
                </div>
                <button className={bgColor + ' w-[200px] rounded-md font-medium my-6 mx-auto py-3 ' + buttonColor}>Start Trial</button>
            </div>


        </div>
    )
}
