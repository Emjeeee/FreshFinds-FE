import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import ActionButtonss from "@/shared/ActionButtonss"
import { SelectedPage } from "@/shared/types"
import HomePageLogo from "@/assets/logoHome.svg"
import HomePageChef from "@/assets/imgD.svg"
import HomePageSymbol from "@/assets/imgE.png"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    return <section
        id="home"
        className="gap-16 py-10 md:h-full md:pb-0 bg-bhome bg-no-repeat bg-"
    >
        {/* IMAGE AND MAIN HEADER */}
        <div className="md: flex items-center justify-center h-full mt-32">
            {/* MAIN HEADER */}
            <div className="z-10 md:basis-2/3 flex flex-col gap-60">
                <div className="mt-20 pt-40">
                    {/* LOGO */}
                    <div>
                        <img alt="home-page-logo" src={HomePageLogo} />
                    </div>
                    <div className="pt-10 px-12">
                        <ActionButtonss setSelectedPage={setSelectedPage}>
                            Get Started!
                        </ActionButtonss>
                    </div>
                </div>
                {/* HEADINGS */}
                <div className="md: flex">
                    <div className="flex flex-row justify-between pt-40">
                        <div>
                            <div className="md: w-[491.69]">
                                <img alt="home-page-chef" src={HomePageChef} />
                            </div>
                        </div>

                        <div className="md: flex flex-col w-1/2 justify-start">
                            <h1 className="text-large font-tnormal text-orange">
                                About FreshFinds
                            </h1>
                            <p className="mt-32 text-black text-end">
                                Introducing <span className="text-xl">FreshFinds</span> - your ultimate grocery shopping companion. With our intuitive app, creating and managing your shopping list has never been easier. Say goodbye to confusion and never miss an item again.  Plus FreshFinds goes beyond a typical grocery list app by suggesting ingredients tailored to your taste preferences.
                            </p>
                            {/* ACTIONS */}
                            <div className="text-end mt-10">
                                <ActionButtonss setSelectedPage={setSelectedPage}>
                                    Explore ➜
                                </ActionButtonss>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}

export default Home