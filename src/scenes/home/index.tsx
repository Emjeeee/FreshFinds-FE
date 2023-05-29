import ActionButtonss from "@/shared/ActionButtonss"
import { SelectedPage } from "@/shared/types"
import HomePageLogo from "@/assets/logoHome.svg"
import HomePageChef from "@/assets/imgD.svg"
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

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    return (
    <>
        <section>
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
                id="category"
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
                    <h1 className="text-4xl font-bold text-orange">
                        Weekly Trending🔥
                    </h1>
                    <div className="flex flex-col mt-10 gap-28 justify-center">
                        <div>
                            <SideScroll/>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="trending"
                className="gap-16 h-full pb-0 bg-btrend bg-no-repeat bg-cover"
            >
                <div className="flex flex-col mx-64 pt-96">
                    <div>
                        <h1 className="text-6xl font-semibold text-white flex justify-center mb-20">
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
                    <div>
                        
                    </div>
                </div>
            </section>
        </section>
    </>
)}

export default Home