import React from 'react'
import { useEffect, useState } from "react"
import AddOrRemove from '@/shared/AddOrRemove'
import Trash from '@/assets/trashIcon.svg'

interface ListProps {
    images: string[];
    title: string[];
    subtitle: string[];
}

const List: React.FC<ListProps> = (props) => {

    const { images, title, subtitle } = props

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

    return (
        <>
            <div className='flex flex-row gap-10 items-center mx-48'>
                {/* <input type="checkbox" className='h-8 w-8 flex flex-col justify-center accent-orange caret-orange' name="" id="" /> */}
                <div className='flex flex-col justify-center'>
                    {checkboxes.map((isChecked, index) => (
                        <div key={index} className='flex items-center'>
                            <input
                                type="checkbox"
                                className='h-8 w-8 accent-orange caret-orange'
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </div>
                    ))}
                </div>
                <a href="">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className='w-80 hover:scale-105 hover:shadow-[15px_15px_4px_-1px_rgba(249,105,14,1)] ease-in-out duration-300' />
                    ))}
                </a>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row text-black text-3xl font-bold'>
                        {title.map((text, index) => (
                            <h1 key={index}>{text}</h1>
                        ))}
                    </div>
                    {subtitle.map((text, index) => (
                        <h1 key={index} className='text-gray-400 text-2xl'>{text}</h1>
                    ))}
                    <div className='flex flex-row gap-28'>
                        <a href=""><img src={Trash} alt="" className='w-16' /></a>
                        <div className='flex flex-row items-center gap-10'>
                            <AddOrRemove initialCount={0} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr className='h-1 ml-20 my-4 mr-5 bg-black border-0 rounded dark:bg-gray-700' />
            </div>
        </>
    )
}

export default List