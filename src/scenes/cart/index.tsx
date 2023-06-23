import * as React from 'react'
import { useEffect, useState } from "react"
import ActionButtonss from "@/shared/ActionButtonss"
import SearchBars from '@/shared/SearchBars'
import SortIcon from '@/assets/iconSort.svg'
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Timer from '@/assets/timer.svg'
import Flash from '@/assets/flash.svg'
import Type from '@/assets/type.svg'
import Navbar from "@/scenes/navbar"
import Footer from "@/scenes/footer"
import CheckBox from '@/shared/CheckBox'
import List from '@/shared/List'

type Props = {
    // setSelectedPage: (value: SelectedPage) => void
}

const Cart = (props: Props) => {

    const [value, setValue] = React.useState<number | null>(1);

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Cart
    )
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState([false]);

    const handleSelectAll = () => {
        const updatedCheckboxes = checkboxes.map(() => !selectAll);
        setCheckboxes(updatedCheckboxes);
        setSelectAll(!selectAll);
    };

    const handleCheckboxChange = (index: number) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !checkboxes[index];
        setCheckboxes(updatedCheckboxes);

        if (updatedCheckboxes.every((checkbox) => checkbox)) {
            setSelectAll(true);
        } else if (updatedCheckboxes.every((checkbox) => !checkbox)) {
            setSelectAll(false);
        }
    };

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const listsData = [
        {
            images: ['/src/assets/firstFood.svg'],
            title: ['サーモン - Salmon Sushi'],
            subtitle: ['Sushi'],
        },
        {
            images: ['/src/assets/secondFood.svg'],
            title: ['シーチキン - Tuna Fish Sushi'],
            subtitle: ['Sushi'],
        },
        {
            images: ['/src/assets/thirdFood.svg'],
            title: ['巻き寿司 - Sushi Roll'],
            subtitle: ['Sushi'],
        },
        {
            images: ['/src/assets/firstFood.svg'],
            title: ['サーモン - Salmon Sushi'],
            subtitle: ['Sushi'],
        },
        {
            images: ['/src/assets/secondFood.svg'],
            title: ['シーチキン - Tuna Fish Sushi'],
            subtitle: ['Sushi'],
        },
    ];

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
                className="h-full bg-bcart-first bg-cover"
            >
                {/* IMAGE AND MAIN HEADER */}
                <motion.div
                    className="flex flex-col items-center justify-center h-full bg-cover"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Cart)}
                >
                    {/* MAIN HEADER */}
                    <div className="z-10 w-4/5 flex flex-col gap-60">
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
                                <div className='flex flex-col gap-14'>
                                    <div className='text-3xl text-black'>
                                        List of recipes that you have chosen
                                    </div>
                                    <div>
                                        <ActionButtonss setSelectedPage={setSelectedPage}>
                                            Explore ➜
                                        </ActionButtonss>
                                    </div>
                                    <div className='flex flex-row gap-5 items-center'>
                                        <div>
                                            <input
                                                type="checkbox"
                                                className="h-8 w-8 accent-orange caret-orange"
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                            />
                                        </div>
                                        <label htmlFor="selectAll" className="text-black text-2xl">
                                            Select All
                                        </label>
                                    </div>
                                </div>
                                <div className='flex flex-row w-1/2 justify-start'>
                                    <div className='w-full flex flex-col justify-start'>
                                        {/* SEARCH BAR */}
                                        <SearchBars />
                                    </div>
                                    <div className='w-20 flex flex-col justify-start'>
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
                className='h-full w-full'
            >
                <div className='flex flex-row'>
                    {/* LIST AND RECIPES */}
                    <div className='flex flex-col gap-20'>
                        {/* LIST */}
                        {listsData.map((list, index) => (
                            <List
                                key={index}
                                images={list.images}
                                title={list.title}
                                subtitle={list.subtitle}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col gap-12 rounded-lg shadow-[2px_2px_10px_6px_rgba(7,6,6,0.10)] p-16 pr-40 h-1/2 pb-28'>
                        {/* RECIPES */}
                        <div className='flex flex-row text-black text-3xl font-bold'>
                            <h1>サーモン - Salmon Sushi</h1>
                        </div>
                        <div className='flex flex-row justify-start mx-3 gap-4'>
                            <div className='flex flex-col justify-center items-center gap-6'>
                                <img src={Timer} alt="" className='w-8'/>
                                <img src={Flash} alt="" className='w-8'/>
                                <img src={Type} alt="" className='w-6'/>
                            </div>
                            <div className='flex flex-col text-gray-500 text-xl font-bold items-start gap-7'>
                                <p>30 minutes</p>
                                <p>560 kcal</p>
                                <p>Beginner</p>
                            </div>
                        </div>
                        <div className='flex flex-row text-black text-3xl font-bold'>
                            <h1>Ingredients</h1>
                        </div>
                        <div className='flex flex-col gap-4 mx-4'>
                            <div className='flex flex-row items-center gap-5'>
                                <CheckBox checked={checked} onChange={handleChange} />
                                <p className='text-black font-medium text-lg mr-1'>Japanese Rice</p>
                                <p className='text-gray-400'>250g</p>
                            </div>
                            <div className='flex flex-row items-center gap-5'>
                                <CheckBox checked={checked} onChange={handleChange} />
                                <p className='text-black font-medium text-lg mr-1'>Salmon</p>
                                <p className='text-gray-400'>300g</p>
                            </div>
                            <div className='flex flex-row items-center gap-5'>
                                <CheckBox checked={checked} onChange={handleChange} />
                                <p className='text-black font-medium text-lg mr-1'>Wasabi</p>
                                <p className='text-gray-400'>50g</p>
                            </div>
                            <div className='flex flex-row items-center gap-5'>
                                <CheckBox checked={checked} onChange={handleChange} />
                                <p className='text-black font-medium text-lg mr-1'>Sushi Vinegar</p>
                                <p className='text-gray-400'>40ml</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="kosong"
                className="h-full bg-bhome-white flex flex-col justify-center mb-96"
            ></section>
            <Footer />
        </>
    )
}

export default Cart