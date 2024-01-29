import { BannerSlider } from '@/components/BannerSlider/BannerSlider';
import { Navbar } from '@/components/Navbar';

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={`${roboto.className}`}>
      <Navbar />
      <BannerSlider />
    </div>
  );
}
