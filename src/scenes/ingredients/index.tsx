import * as React from 'react'
import { useEffect, useState } from "react"
import ActionButtonss from "@/shared/ActionButtonss"
import SearchBars from '@/shared/SearchBars'
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import ToggleSwitchA from "@/shared/ToggleSwitchA"
import ToggleSwitchB from "@/shared/ToggleSwitchB"
import ToggleSwitchC from "@/shared/ToggleSwitchC"
import ToggleSwitchD from "@/shared/ToggleSwitchD"
import ToggleSwitchE from "@/shared/ToggleSwitchE"
import ToggleSwitchF from "@/shared/ToggleSwitchF"
import ToggleSwitchG from "@/shared/ToggleSwitchG"
import Card from "@/shared/Card"
import TextField from "@mui/material/TextField"
import Carousel from '@/shared/Carousel'
import Cart from "@/assets/cart.svg"
import Navbar from "@/scenes/navbar"
import Footer from "@/scenes/footer"
import Sushi from '@/assets/sushiCar.svg'
import Burger from '@/assets/burgerCar.svg'
import Salad from '@/assets/saladCar.svg'

type Props = {
  // setSelectedPage: (value: SelectedPage) => void
}

const Ingredients = (props: Props) => {

  const [value, setValue] = React.useState<number | null>(1);

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Ingredients
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Ingredients)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section>
        <section>
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </section>
        <section
          id="ingredients"
          className="gap-16 h-full pb-0 bg-bingred bg-no-repeat bg-cover"
        >
          {/* IMAGE AND MAIN HEADER */}
          <motion.div
            className="flex flex-col items-center justify-center h-full bg-cover"
            onViewportEnter={() => setSelectedPage(SelectedPage.Ingredients)}
          >
            {/* MAIN HEADER */}
            <div className="z-10 w-4/5 flex flex-col mt-24 gap-60">
              <motion.div
                className="flex flex-col mx-20 mt-32 gap-2 text-white"
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
                  Ingredients
                </div>
                <div className="text-xl">
                  Discover your perfect ingredients with FreshFinds
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
                  Recipes
                </div>
                <div className='flex flex-row justify-between'>
                  {/* DESC */}
                  <div className='flex flex-col gap-10'>
                    <div className='text-3xl text-black'>
                      Top Best Recipes of The Month
                    </div>
                    <div>
                      <ActionButtonss setSelectedPage={setSelectedPage}>
                        Add Recipes ➜
                      </ActionButtonss>
                    </div>
                  </div>
                  <div className='flex flex-row w-1/2 justify-start'>
                    <div className='w-full flex flex-col justify-center'>
                      {/* SEARCH BAR */}
                      <SearchBars/>
                    </div>
                    <div className='w-20 flex flex-col justify-center'>
                      {/* CART ICON */}
                      <a href=""><img src={Cart} alt="" /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section
          id="category-ingredients"
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
        </section>
        <section
          id="horizontal-line"
          className="my-32 md:h-full md:pb-0"
        >
          <hr className='w-11/12 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700'/>
        </section>
        <section
          id="recipe"
          className="my-32 md:h-full md:pb-0 mb-80"
        >
          <div className='flex flex-col justify-center gap-20 text-black items-center mx-14'>
            <div className='flex w-full'>
              {/* SLIDESHOW */}
              <Carousel/>
            </div>
            <div className='flex flex-row gap-10'>
              <div className='flex flex-col gap-20'>
                {/* FIRST COLUMN */}
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
              </div>
              <div className='flex flex-col gap-20'>
                {/* SECOND COLUMN */}
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
              </div>
              <div className='flex flex-col gap-20'>
                {/* THIRD COLUMN */}
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
                <div>
                  GAMBAR
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  )
}

export default Ingredients