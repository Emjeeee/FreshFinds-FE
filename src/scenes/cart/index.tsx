import * as React from 'react'
import { useEffect, useState } from "react"
import ActionButtonss from "@/shared/ActionButtonss"
import SearchBars from '@/shared/SearchBars'
import SortIcon from '@/assets/iconSort.svg'
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import ToggleSwitchA from "@/shared/ToggleSwitchA"
import ToggleSwitchB from "@/shared/ToggleSwitchB"
import ToggleSwitchC from "@/shared/ToggleSwitchC"
import ToggleSwitchD from "@/shared/ToggleSwitchD"
import ToggleSwitchE from "@/shared/ToggleSwitchE"
import ToggleSwitchF from "@/shared/ToggleSwitchF"
import ToggleSwitchG from "@/shared/ToggleSwitchG"
import Carousel from '@/shared/Carousel'
import Navbar from "@/scenes/navbar"
import Footer from "@/scenes/footer"

type Props = {
    // setSelectedPage: (value: SelectedPage) => void
}

const Cart = (props: Props) => {

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
                id="cart"
                className="h-full bg-bcart-first bg-cover mb-40"
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
                                Cart
                            </div>
                            <div className="text-xl tracking-wide">
                                <p>Organize your cooking journey with FreshFinds' recipe cart-effortlessly</p>
                                <p>save and view the ingredients you need for your favorite recipes</p>
                            </div>
                        </motion.div>
                        {/* HEADINGS */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            className='flex flex-col mt-32 gap-4'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className='flex text-7xl text-black font-bold'>
                                {/* RECIPES */}
                                List Recipes
                            </div>
                            <div className='flex flex-row justify-between'>
                                {/* DESC */}
                                <div className='flex flex-col gap-10'>
                                    <div className='text-3xl text-black'>
                                        List of recipes that you have chosen
                                    </div>
                                    <div>
                                        <ActionButtonss setSelectedPage={setSelectedPage}>
                                            Explore ➜
                                        </ActionButtonss>
                                    </div>
                                    <div className='flex flex-row  gap-5'>
                                        <div>
                                            <input type="checkbox" className='h-8 w-8 flex flex-col justify-center accent-orange caret-orange' name="" id="" />
                                        </div>
                                        <div className='text-[#070606] text-2xl '>
                                            Select All
                                        </div>
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
                className="h-1/5 flex flex-col  justify-center"
            >
                <hr className='w-11/12 h-1 mx-auto my-4 bg-black border-0 rounded dark:bg-gray-700' />
            </section>
            <section
                id="list"
                className='h-full'
            >
                <div className='flex flex-row justify-center border-red-50'>
                    {/* LIST AND RECIPES */}
                    <div className='flex flex-col'>
                        {/* LIST */}
                        <div className='flex flex-row'>
                            <div>
                                {/* CHECKBOX */}
                                <input type="checkbox" className='h-8 w-8 flex flex-col justify-center accent-orange caret-orange' name="" id="" />
                            </div>
                            <div>
                                {/* IMAGE */}
                                <img src="" alt="" />
                            </div>
                            <div>
                                {/* DESC */}
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* RECIPES */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Cart