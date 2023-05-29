import React from 'react'
import { data } from '../mockData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function SideScroll() {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-100 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
          {data.map((item) => (
            <img
              className='w-[350px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt=""
            />
          ))}
        </div>
        <MdChevronRight className='opacity-100 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  )
}

export default SideScroll