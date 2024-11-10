import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='bg-[#A29875] flex'>
            <h1  className='p-5 ml-6 font-rye text-white text-5xl' >MANZZARI</h1>
            <div className=' ml-48 mt-8 flex'>
                <div className='bg-white h-11 w-[43rem] rounded-lg flex'>
                    <p className='p-[10px] text-[15px] text-gray-600'>Search for Gold Jewellery, Diamond Jewellery and more…</p>
                    <Image src="/search.svg" alt="" width={32} height={32} className='ml-[13rem]' />
                </div>
                <a href="">
                    <Image src="/heart.svg" alt="" height={33} width={33} className='ml-20 mb-5' />
                    </a>
               <a href="">
                <Image src="/contact.svg" alt="" height={31} width={31} className=' ml-10 mb-5' />
                </a> 
               <a href="">
                <Image src="/shop.svg" alt="" height={33} width={33} className='ml-10 mb-5' />
                </a> 
            </div>

        </div>
    )
}

export default Navbar
