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

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    return <section>
        <section
            id="home"
            className="gap-16 md:h-full md:pb-0 md:bg-bhome md:bg-no-repeat xs:bg-hhome"
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="md:flex md:flex-col md:items-center md:justify-center md:h-full"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <div className="z-10 md:w-4/5 md:flex md:flex-col md:mt-24 md:gap-60">
                    <motion.div
                        className="md:mx-20 xs:mx-10 xs:mt-20 xs:gap-10"
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
                        <div>
                            <img alt="home-page-logo" src={HomePageLogo} />
                        </div>
                        <div className="pt-10 px-3 xs:mx-10">
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

                            <div className="md: flex flex-col -w-full">
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
            <div className="gap-8 flex flex-col mt-36">
                <h1 className="text-4xl font-bold text-orange">
                    Weekly Trending🔥
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
        </section>
    </section>
}

export default Home