"use client";

import { BannerSlider } from '@/components/BannerSlider/BannerSlider';
import { EmCartaz } from '@/components/EmCartaz/EmCartaz';
import { ModalTrailer } from '@/components/Modais/ModalTrailer';
import { Navbar } from '@/components/Navbar';
import { ModalTrailerIsOpenContext } from '@/contexts/ModalTrailerContext';

import { Roboto } from 'next/font/google'
import { useState } from 'react';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {

  const [modalTrailerIsOpen, setModalTrailerIsOpen] = useState(false)

  return (
    <div className={`${roboto.className}`}>
      <Navbar />

      <ModalTrailerIsOpenContext.Provider value={{modalTrailerIsOpen, setModalTrailerIsOpen}}>
        <BannerSlider />
        {modalTrailerIsOpen === true ? <ModalTrailer/> : ""}
      </ModalTrailerIsOpenContext.Provider>

      <EmCartaz />
    </div>
  );
}
