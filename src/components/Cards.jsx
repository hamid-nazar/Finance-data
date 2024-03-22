import React from 'react'


import Single from "./../assets/images/single.png"
import Double from "./../assets/images/double.png"
import Triple from "./../assets/images/triple.png"
import { Card } from './Card'

export function Cards() {
    return (
        <div className='w-full py-[10rem] bg-white px-4'>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

               <Card img={Single} title={"Single User"} desc={"1 Granted User"} price={"$149"} size={"500 GB Storage"} storage={"Send up to 2GB"} bgColor={"bg-[#00df9a]"} buttonColor={"text-black"} margin={"my-4"}/>
               <Card img={Double} title={"Single User"} desc={"1 Granted User"} price={"$149"} size={"500 GB Storage"} storage={"Send up to 2GB"} bgColor={"bg-black"} buttonColor={"text-[#00df9a]"} textColor={"bg-gray-100"} margin={"my-8"}/>
               <Card img={Triple} title={"Single User"} desc={"1 Granted User"} price={"$149"} size={"500 GB Storage"} storage={"Send up to 2GB"} bgColor={"bg-[#00df9a]"} buttonColor={"text-black"} margin={"my-4"} />

            </div>
            
        </div>
    )
}
