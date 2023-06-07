import { useEffect, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/logo.svg"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import ActionButtons from "@/shared/ActionButtons"
import ActionButtonsss from "@/shared/ActionButtonsss"
// import { Link } from "react-router-dom"

type Props = {
    isTopOfPage: boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow"

    return <nav>
        <div
            className={`${navbarBackground} ${flexBetween} absolute  top-0 z-40 w-full py-6 transition duration-500`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img className="w-10" alt="logo" src={Logo} />

                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-20 text-lg font-bold mx-20`}>
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Ingredients"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Cart"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Forum"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <div className={`${flexBetween} gap-8 font-bold`}>
                                <ActionButton setSelectedPage={setSelectedPage}>Register</ActionButton>
                                <ActionButtons setSelectedPage={setSelectedPage}>Login</ActionButtons>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-transparent p-2 "
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white " />
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-black drop-shadow-xl flex flex-col justify-around">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-white mx-10 -my-24" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 text-2xl text-center text-white">
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Ingredients"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Cart"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Forum"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>

                {/* BUTTON */}
                <div className="text-center">
                    <ActionButtonsss setSelectedPage={setSelectedPage}>Login</ActionButtonsss>
                </div>
            </div>
        )}
    </nav>
}

export default Navbar