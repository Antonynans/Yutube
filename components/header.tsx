import {BsSearch, BsCameraVideo, BsBell, BsMicFill, BsYoutube } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Itoogle {
  toggleSidebar: any
}

export const Header: React.FC<Itoogle> = ({toggleSidebar}) => {
  const [inputValue, setInputValue] = useState('');

  const router = useRouter();

  return (
    <div className='bg-white flex items-center justify-between fixed top-0 left-0 right-0 z-20'>
      <div className='mx-2 px-2 bg-white flex items-center' 
      onClick={() => toggleSidebar()}
      >
        <FaBars className='cursor-pointer w-10 h-10 p-2 lg:block hidden' />
        <div className=''>
      <Link href='/'>
        <a className='cursor-pointer flex items-center bg-white pt-5 pb-2 lg:pl-6 text-2xl font-bold tracking-tighter relative'>
        <BsYoutube className='text-4xl text-red-600 bg-white' />
        YuTube
        <span className='bg-white opacity-50 text-[12px] absolute -right-2 top-4 leading-tight'>NG</span>
        </a>
        </Link>
      </div>
      </div>
      
      <div className='flex items-center justify-center bg-transparent'>
      <div className='relative flex items-center justify-center '>
        <input type='text' placeholder='Search' className='rounded-lg lg:bg-gray-200 bg-white focus:outline-none  lg:w-[35rem] lg:w-[20rem] w-full py-2 px-4' 
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            router.push(`/?query=${inputValue.toLowerCase()}`)
          }
        }} 
        />
        <BsSearch className='absolute cursor-pointer right-4 bg-transparent' 
        onClick={() => router.push(`/?query=${inputValue.toLowerCase()}`)}/>
      </div>
      <div className='shadow-lg ml-5 p-2 rounded-full hidden lg:block cursor-pointer'>
      <BsMicFill className='text-2xl   ' />
      </div>
      </div>
      <div className='flex items-center justify-between bg-white gap-8 lg:mr-8 mr-4'>
        <BsCameraVideo className='text-3xl bg-white cursor-pointer hidden lg:block' />
        <div className='cursor-pointer relative hidden lg:block '>
          <BsBell className='text-3xl bg-white' />
          <span className='absolute -top-3 -right-1 bg-red-600 p-3 w-4 h-4 text-center flex items-center justify-center rounded-full text-xs text-white'>2</span>
        </div>
        <div className='rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'>AN</div>
      </div>
    </div>
  )
}