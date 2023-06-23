import React from 'react'
import { useEffect, useState } from "react"

interface FoodThumbProps {
    images: string[];
    title: string[];
    subtitle: string[];
}

const FoodThumb: React.FC<FoodThumbProps> = (props) => {
    const { images, title, subtitle } = props

    return (
        <>
            <div className=''>
                <a href="">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className='w-80 hover:scale-105 hover:shadow-[15px_15px_4px_-1px_rgba(249,105,14,1)] ease-in-out duration-300' />
                    ))}
                </a>
            </div>
        </>
    )
}

export default FoodThumb