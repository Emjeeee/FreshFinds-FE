import * as React from 'react'
import { useEffect, useState } from "react"
import SearchBars from '@/shared/SearchBars'
import SortIcon from '@/assets/iconSort.svg'
import Profile from '@/assets/photoProfile.svg'
import Globe from '@/assets/globe.svg'
import Image from '@/assets/image.svg'
import PopUp from '@/assets/popUp.svg'
import Edit from '@/assets/edit.svg'
import Upload from '@/assets/upload.svg'
import ActionButton from '@/shared/ActionButton'
import Choice from '@/assets/choice.svg'
import Bookmark from '@/assets/bookmark.svg'
import UpVote from '@/assets/upvote.svg'
import DownVote from '@/assets/downvote.svg'
import Comment from '@/assets/comment.svg'
import Share from '@/assets/share.svg'
import ForumImage from '@/assets/forumImage.svg'
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Navbar from "@/scenes/navbar"
import Footer from "@/scenes/footer"
import { common } from '@mui/material/colors'

type Props = {
    // setSelectedPage: (value: SelectedPage) => void
}

const Forum = (props: Props) => {

    const [value, setValue] = React.useState<number | null>(1);

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Cart
    )
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true)
                setSelectedPage(SelectedPage.Cart)
            }
            if (window.scrollY !== 0) setIsTopOfPage(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <section
                id="forum"
                className="h-full bg-bforum-first bg-cover mb-40"
            >
                {/* IMAGE AND MAIN HEADER */}
                <motion.div
                    className="flex flex-col items-center justify-center h-full bg-cover"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Cart)}
                >
                    {/* MAIN HEADER */}
                    <div className="z-10 w-4/5 flex flex-col gap-80">
                        <motion.div
                            className="flex flex-col mx-20 mt-60 gap-2 text-white"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            {/* LOGO */}
                            <div className="text-5xl font-bold">
                                Forum
                            </div>
                            <div className="text-xl tracking-wide">
                                <p>Join the culinary community on FreshFinds' vibrant forum - share recipe</p>
                                <p>experiences, seek advice, and connect with fellow food enthusiasts.</p>
                            </div>
                        </motion.div>
                        {/* HEADINGS */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            className='flex flex-col mt-32'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className='flex text-8xl text-black font-extrabold'>
                                {/* RECIPES */}
                                Forum
                            </div>
                            <div className='flex flex-row justify-between'>
                                {/* DESC */}
                                <div className='flex flex-col gap-10'>
                                    <div className='text-3xl text-black my-3 font-bold tracking-wider'>
                                        Join our wonderful community
                                    </div>
                                </div>
                                <div className='flex flex-row w-1/2 justify-start'>
                                    <div className='w-full flex flex-col justify-center'>
                                        {/* SEARCH BAR */}
                                        <SearchBars />
                                    </div>
                                    <div className='w-20 flex flex-col justify-center'>
                                        {/* CART ICON */}
                                        <a href="/home"><img src={SortIcon} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <section
                id="horizontal-line"
                className="h-1/7 flex flex-col  justify-center"
            >
                <hr className='w-11/12 h-1 mx-auto my-4 bg-black border-0 rounded dark:bg-gray-700' />
            </section>
            <section
                id="feed"
                className='h-full flex justify-center mt-20'
            >
                <div className='flex flex-col mx-40 w-1/2 gap-20'>
                    <div className='rounded-xl bg-white shadow-lg'>
                        {/* CONTAINER */}
                        <div className='flex flex-row mx-10 my-10 justify-between'>
                            <a href=""><img src={Profile} alt="" className='w-28' /></a>
                            <div className='w-1/2 flex flex-col gap-4 mt-10 mr-20'>
                                {/* CONTENT */}
                                <input className='outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-200 ... caret-black text-black text-3xl font-bold mb-3' placeholder='Add a new thread ...' />
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={Globe} alt="" className='w-7'/>
                                    <p className='text-orange font-bold'>Everyone can reply</p>
                                </div>
                                <div className='flex flex-row gap-4 items-center'>
                                    <a href=""><img src={Image} alt="" className='w-5' /></a>
                                    <a href=""><img src={PopUp} alt="" className='w-5' /></a>
                                    <a href=""><img src={Edit} alt="" className='w-5' /></a>
                                    <a href=""><img src={Upload} alt="" className='w-5' /></a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end'>
                                {/* BUTTON */}
                                <ActionButton setSelectedPage={setSelectedPage}>Post ➤</ActionButton>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-white shadow-lg'>
                        {/* CONTAINER */}
                        <div className='flex flex-col mx-10 my-10 justify-between'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row gap-4'>
                                    <a href=""><img src={Profile} alt="" className='w-28' /></a>
                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-black text-2xl font-semibold'>Juliana Cassey</h1>
                                        <p className='text-gray-400 font-medium'>4h ago</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-6'>
                                    <a href=""><img src={Choice} alt="" className='w-6' /></a>
                                    <a href=""><img src={Bookmark} alt="" className='w-6' /></a>
                                </div>
                            </div>
                            <div className='flex flex-col text-black text-3xl mx-32'>
                                <p>Does Chinese Food always contains pork in</p>
                                <p>it? Or we can change with other ingredients?</p>
                            </div>
                            <div className='flex flex-row justify-evenly mt-12'>
                                <div className='flex flex-row items-center'>
                                    <a href=""><img src={UpVote} alt="" className='w-8 mr-8' /></a>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={DownVote} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>3.2 k</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={Comment} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>1.2 k</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={Share} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-white shadow-lg'>
                        {/* CONTAINER */}
                        <div className='flex flex-col mx-10 my-10 justify-between'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row gap-4'>
                                    <a href=""><img src={Profile} alt="" className='w-28' /></a>
                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-black text-2xl font-semibold'>Juliana Cassey</h1>
                                        <p className='text-gray-400 font-medium'>4h ago</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-6'>
                                    <a href=""><img src={Choice} alt="" className='w-6' /></a>
                                    <a href=""><img src={Bookmark} alt="" className='w-6' /></a>
                                </div>
                            </div>
                            <div className='flex flex-col text-black text-3xl mx-32 gap-10'>
                                <p>This is the Best Ramen i ever made!</p>
                                <img src={ForumImage} alt="" className='w-96'/>
                            </div>
                            <div className='flex flex-row justify-evenly mt-12'>
                                <div className='flex flex-row items-center'>
                                    <a href=""><img src={UpVote} alt="" className='w-8 mr-8' /></a>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={DownVote} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>3.2 k</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={Comment} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>1.2 k</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={Share} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-white shadow-lg'>
                        {/* CONTAINER */}
                        <div className='flex flex-col mx-10 my-10 justify-between'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row gap-4'>
                                    <a href=""><img src={Profile} alt="" className='w-28' /></a>
                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-black text-2xl font-semibold'>Juliana Cassey</h1>
                                        <p className='text-gray-400 font-medium'>4h ago</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-6'>
                                    <a href=""><img src={Choice} alt="" className='w-6' /></a>
                                    <a href=""><img src={Bookmark} alt="" className='w-6' /></a>
                                </div>
                            </div>
                            <div className='flex flex-col text-black text-3xl mx-32'>
                                <p>I think Sushi nowadays is getting improved</p>
                                <p>it taste so good!</p>
                            </div>
                            <div className='flex flex-row justify-evenly mt-12'>
                                <div className='flex flex-row items-center'>
                                    <a href=""><img src={UpVote} alt="" className='w-8 mr-8' /></a>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={DownVote} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>3.2 k</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={Comment} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>1.2 k</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <a href=""><img src={Share} alt="" className='w-8' /></a>
                                    <p className='text-gray-400'>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="kosong"
                className="h-full mb-60"
            >
            </section>
            <Footer />
        </>
    )
}

export default Forum