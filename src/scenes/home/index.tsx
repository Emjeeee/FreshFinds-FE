import * as React from 'react'
import { useEffect, useState } from "react"
import ActionButtonss from "@/shared/ActionButtonss"
import { SelectedPage } from "@/shared/types"
import HomePageLogo from "@/assets/logoHome.svg"
import HomePageChef from "@/assets/imgD.svg"
import Logo from "@/assets/freshLogo.svg"
import Phone from "@/assets/iphone.svg"
import App from "@/assets/appstore.svg"
import Play from "@/assets/playstore.svg"
import Voice from "@/assets/voices.svg"
import Profile from "@/assets/profile.svg"
import { motion } from "framer-motion"
import ToggleSwitchA from "@/shared/ToggleSwitchA"
import ToggleSwitchB from "@/shared/ToggleSwitchB"
import ToggleSwitchC from "@/shared/ToggleSwitchC"
import ToggleSwitchD from "@/shared/ToggleSwitchD"
import ToggleSwitchE from "@/shared/ToggleSwitchE"
import ToggleSwitchF from "@/shared/ToggleSwitchF"
import ToggleSwitchG from "@/shared/ToggleSwitchG"
import SideScroll from "@/shared/SideScroll"
import Card from "@/shared/Card"
import TextField from "@mui/material/TextField"
import Rating from '@mui/material/Rating'
import Navbar from "@/scenes/navbar"
import Footer from "@/scenes/footer"

type Props = {
    // setSelectedPage: (value: SelectedPage) => void
}

const Home = (props: Props) => {

const [value, setValue] = React.useState<number | null>(1);

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    )
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true)
                setSelectedPage(SelectedPage.Home)
            }
            if (window.scrollY !== 0) setIsTopOfPage(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
    <>
        <section>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <section
                id="home"
                className="gap-16 h-full pb-0 bg-bhome bg-no-repeat bg-cover"
            >
                {/* IMAGE AND MAIN HEADER */}
                <motion.div
                    className="flex flex-col items-center justify-center h-full bg-cover"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                >
                    {/* MAIN HEADER */}
                    <div className="z-10 w-4/5 flex flex-col mt-24 gap-60">
                        <motion.div
                            className="flex flex-col mx-20 mt-20 gap-10 "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x:-100 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            {/* LOGO */}
                            <div className="text-black">
                                <img alt="home-page-logo" src={HomePageLogo} />
                            </div>
                            <div className="px-3 mx-10">
                                <ActionButtonss setSelectedPage={setSelectedPage}>
                                    Get Started!
                                </ActionButtonss>
                            </div>
                        </motion.div>
                        {/* HEADINGS */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="flex flex-row pt-40 justify-around">
                                <div>
                                    <div className="md: w-[491.69]">
                                        <img alt="home-page-chef" src={HomePageChef} />
                                    </div>
                                </div>

                                <div className="flex flex-col -w-full mt-7">
                                    <h1 className="text-4xl font-bold text-orange">
                                        About FreshFinds
                                    </h1>
                                    <p className="mt-14 text-black text-end text-lg tracking-wide">
                                        Introducing <span className="font-bold">FreshFinds</span> - your ultimate grocery shopping companion. With our intuitive
                                        <br />
                                        app, creating and managing your shopping list has never been easier. Say goodbye to
                                        <br />
                                        confusion and never miss an item again.  Plus FreshFinds goes beyond a typical grocery
                                        <br />
                                        list app by suggesting ingredients tailored to your taste preferences.
                                    </p>
                                    {/* ACTIONS */}
                                    <div className="text-end mt-10">
                                        <ActionButtonss setSelectedPage={setSelectedPage}>
                                            Explore ➜
                                        </ActionButtonss>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <section
                id="home-category-and-weekly-trending"
                className="my-32 md:h-full md:pb-0"
            >
                <div className="gap-8 flex flex-col mx-64">
                    <h1 className="text-4xl font-bold text-orange">
                        Choose Your Category
                    </h1>
                    <div className="flex flex-row mt-10 gap-28 justify-center">
                        <div>
                            <ToggleSwitchA />
                        </div>
                        <div>
                            <ToggleSwitchB />
                        </div>
                        <div>
                            <ToggleSwitchC />
                        </div>
                        <div>
                            <ToggleSwitchD />
                        </div>
                    </div>
                    <div className="flex flex-row gap-28 justify-center">
                        <div>
                            <ToggleSwitchE />
                        </div>
                        <div>
                            <ToggleSwitchF />
                        </div>
                        <div>
                            <ToggleSwitchG />
                        </div>
                    </div>
                </div>
                <div className="gap-8 flex flex-col mt-36 mx-64">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-4xl font-bold text-orange">
                            Weekly Trending🔥
                        </h1>
                        <a href="" className="flex flex-col justify-center text-xl text-gray-400">See More</a>
                    </div>
                    <div className="flex flex-col mt-10 gap-28 justify-center">
                        <div>
                            <SideScroll/>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="home-trending-today"
                className="gap-16 h-full pb-0 bg-btrend bg-orange bg-no-repeat bg-cover pt-96"
            >
                <div className="flex flex-col mx-64">
                    <div>
                        <h1 className="text-6xl font-semibold text-white flex justify-center mb-20 tracking-wide">
                            Trending Today!
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center gap-40">
                        <div>
                            <Card setSelectedPage={setSelectedPage} />
                        </div>
                        <div>
                            <Card setSelectedPage={setSelectedPage} />
                        </div>
                        <div>
                            <Card setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="home-introducing"
                className="gap-16 h-full bg-orange bg-no-repeat bg-cover pt-40"
            >
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center gap-4">
                        <div className="flex flex-row">
                            <img className="w-72" alt="logo" src={Logo} />
                        </div>
                        <h1 className="text-5xl text-white font-semibold flex mt-10">Introducing</h1>
                    </div>
                    <div className="flex flex-row justify-between mt-12">
                        <div className="flex flex-col gap-10 ml-60 justify-center">
                            <div className="flex flex-row gap-4">
                                <img className="w-60" alt="logo" src={Logo} />
                                <h1 className="text-4xl text-white font-semibold flex mt-9">Mobile App</h1>
                            </div>
                            <div className="flex flex-col gap-5 text-xl font-medium">
                                <div className="">
                                    <span className="text-2xl font-extrabold">FreshFinds</span> offers the ultimate convenience with its mobile app,
                                    <br />
                                    providing users with access to its features anytime, anywhere.
                                </div>
                                <div>
                                    The intuitive interface ensures a seamless experience, and
                                    <br />
                                    personalized ingredient suggestions and store navigation
                                    <br />
                                    assistance are all at your fingertips.
                                </div>
                                <div className="font-bold mt-4">
                                    Available at:
                                </div>
                                <div className="flex flex-row gap-10">
                                    <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                                        <a href=""><img src={App} alt="app" /></a>
                                    </div>
                                    <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                                        <a href=""><img src={Play} alt="play" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                                <img src={Phone} alt="phone" className="-z-1 w-2/3" />
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="home-feedbacks"
                className="gap-16 h-full bg-orange bg-no-repeat bg-cover pt-40 pb-96"
            >
                <div className="flex flex-col gap-40">
                    <div className="flex flex-row justify-center gap-4">
                        <div className="flex flex-row">
                            <img className="w-72" alt="logo" src={Logo} />
                        </div>
                        <h1 className="text-5xl text-white font-semibold flex mt-10">Feedbacks</h1>
                    </div>
                    <div className="flex flex-row mx-36 justify-around">
                        <div className="flex flex-col justify-center gap-10">
                            <div className="flex text-6xl font-extrabold tracking-tight text-white">
                                Let's Hear Our
                                <br />
                                Client Voices
                            </div>
                            <div>
                                <img src={Voice} alt="voice" />
                            </div>
                        </div>
                        <div className="flex flex-col bg-white rounded-3xl p-10">
                            {/* CONTAINER */}
                            <div className="flex flex-row items-center gap-10">
                                {/* IMAGE & PARAGRAPH */}
                                <div>
                                    {/* IMAGE */}
                                    <img src={Profile} alt="profile" />
                                </div>
                                <div className="flex flex-col gap-3 justify-start">
                                    <div className="text-[#939393]">
                                        {/* PARAGRAPH */}
                                        "I just received this shirt in the mail and I'm blown
                                        <br />
                                        away by the quality of the fabric. It feels so soft and
                                        <br />
                                        comfortable, and the fit is perfect. I love the
                                        <br />
                                        attention to detail in the design and the colors are
                                        <br />
                                        so vibrant. This is truly a work of art and I feel so
                                        <br />
                                        lucky to own it. Thank you for creating such a
                                        <br />
                                        wonderful product!"
                                    </div>
                                    <div className="bg-black flex flex-row px-3 py-1 rounded-full gap-3 w-1/3 justify-center">
                                            {/* EVERYONE */}
                                        <div className="text-orange text-sm">
                                            Everyone
                                        </div>
                                        <div className="text-orange text-sm">
                                            ▼
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                {/* NAME & THREAD */}
                                <div className="flex flex-col gap-3">
                                    <div className="text-black text-4xl font-bold">
                                        {/* NAME */}
                                        Hansen Martino
                                    </div>
                                    <div className="text-gray-400">
                                        {/* JOB */}
                                        Professional Taylor
                                    </div>
                                    <div>
                                        {/* RATINGS */}
                                        <Rating
                                            name="simple-controlled"
                                            size="large"
                                            defaultValue={0.5} precision={0.5}
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-3/5 pl-9 gap-7">
                                    <div>
                                        {/* REPLY */}
                                            <TextField
                                            fullWidth
                                            size="small"
                                            id="standard-basic" label="🌐 Everyone can reply"
                                            variant="standard" />
                                    </div>
                                    <div className="flex flex-row justify-end">
                                        {/* POST */}
                                        <ActionButtonss setSelectedPage={setSelectedPage}>
                                            Post ⌲
                                        </ActionButtonss>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    </>
)}

export default Home