import Line from '@/shared/Line'
import SearchBar from '@/shared/SearchBar'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Forum = ({setSelectedPage}: Props) => {
    return (
    <>
        <section>
            <section
                id="forum"
                className="gap-16 h-full pb-0 bg-bforum bg-no-repeat bg-cover"
            >
                {/* IMAGE AND MAIN HEADER */}
                <motion.div
                    className="flex flex-col items-center justify-center h-full bg-cover"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Forum)}
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
                            <div className="font-bold text-white">
                                <h1 className="text-5xl leading-normal">
                                Forum
                                </h1>
                                <h1 className="text-base">
                                Join the culinary community on FreshFinds' vibrant forum - share recipe 
                                <br />
                                experiences, seek advice, and connect with fellow food enthusiasts.
                                </h1>
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
                            <div className="flex flex-row justify-between text-black font-bold">
                                <div className='w-1/2'>
                                    <h1 className="text-7xl">
                                        Forum
                                    </h1>
                                    <h1 className="text-2xl">
                                        Join our wonderful community
                                    </h1>
                                </div>
                                <div className='w-1/2 flex flex-col justify-end'>
                                    <SearchBar>
                                    </SearchBar>
                                </div>
                            </div>

                            <div className="justify-center mt-24 ml-auto">
                                <Line></Line>
                            </div>
                        </motion.div>
                        <div>
                            HALO
                        </div>
                    </div>
                </motion.div>
                
            </section>
        </section>
    </>
)}

export default Forum