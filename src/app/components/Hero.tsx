import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className='flex justify-between mr-10 mt-[4rem]'>
        <div>
          <h1 className='font-liber text-6xl leading-[93px] mt-[6rem] ml-[9rem]'>IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE</h1>
          <p className='font-liber text-[#787054] text-3xl ml-[9rem] mr-[4rem] mt-14'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
        </div>
        <Image src="/image.png" alt="" width={421} height={271} objectFit='cover'/>
        <img src="outline.svg" alt="" style={{ position: 'absolute', top: 0, left: 0, mixBlendMode: 'screen' }} className='ml-[68.3rem] mt-[12rem]' />

      </div>
      <button className='rounded-2xl bg-[#A29875] text-white text-3xl font-liber px-12 py-2 ml-[9rem] mt-[2rem]'>Explore Now</button>
    </div>
  );
}

export default Hero;