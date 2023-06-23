import React from 'react'
import Logo from "@/assets/logoFooter.svg"
import Phone from "@/assets/phone.svg"
import Mail from "@/assets/mail.svg"
import Location from "@/assets/location.svg"
import FacebookIcon from '@/assets/facebook.svg'
import TwitterIcon from '@/assets/twitter.svg'
import LinkedIcon from '@/assets/linkedin.svg'
import InstaIcon from '@/assets/instagram.svg'
import SearchBar from '@/shared/SearchBar'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
        <section
            id="connected"
            className="h-full bg-bconnect bg-cover bg-center flex flex-col justify-end -mt-[35rem]"
        >
            <div className='flex flex-col justify-center gap-12 pt-20 pb-32'>
                <div className='flex justify-center text-6xl font-extrabold text-white'>
                    Let's Get Connected!
                </div>
                <div className='flex justify-center'>
                    <SearchBar />
                </div>
            </div>
        </section>
        <div className='flex flex-col justify-center bg-black bg-center bg-cover'>
            <div className='flex flex-row justify-between mx-32 mb-10 mt-5 h-full text-white'>
                <div className='flex justify-center text-center'>
                    <img src={Logo} alt="logo" className='w-72 mb-16' />
                </div>
                <div className='flex flex-row justify-center gap-16 pt-28'>
                    <div className='flex flex-col gap-7'>
                        <h1 className='text-5xl font-extrabold'>
                            Pages
                        </h1>
                        <div className='flex flex-col gap-3 text-xl'>
                            <a href="/home">Home</a>
                            <a href="/ingredients">Ingredients</a>
                            <a href="/cart">Cart</a>
                            <a href="/forum">Forum</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <h1 className='text-5xl font-extrabold'>
                            Service
                        </h1>
                        <div className='flex flex-col gap-3 text-xl'>
                            <a href="/">Website</a>
                            <a href="/">Mobile</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <h1 className='text-5xl font-extrabold'>
                            Contact
                        </h1>
                        <div className='flex flex-col gap-3 text-xl'>
                            <div className='flex flex-row gap-4'>
                                <img src={Phone} alt="" className='w-6'/>
                                <a href="">+6281297101364</a>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <img src={Mail} alt="" className='w-6'/>
                                <a href="">freshfinds@gmail.com</a>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <img src={Location} alt="" className='w-6'/>
                                <a href="">Jl. Usman Harun No. 2 Blok C</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-5xl font-extrabold text-white pt-28'>
                        Social Media
                    </h1>
                    <div className='flex flex-row justify-center gap-10'>
                        <a href=""><img src={FacebookIcon} alt="" /></a>
                        <a href=""><img src={TwitterIcon} alt="" /></a>
                        <a href=""><img src={LinkedIcon} alt="" /></a>
                        <a href=""><img src={InstaIcon} alt="" /></a>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center text-center text-lg opacity-50 my-6'>
                    Privacy Policy ● Support ● Copyright © 2023 FreshFinds
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer