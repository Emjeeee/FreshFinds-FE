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
        <MdChevronLeft className='opacity-1 cursor-pointer hover:opacity-1 fill-orange mb-10' onClick={slideLeft} size={40} />
        <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {data.map((item) => (
            <img
              className='w-[280px] h-[180.14px] inline-block p-2 cursor-pointer hover:scale-105 hover:shadow-[15px_15px_4px_-1px_rgba(255,217,61,1)] ease-in-out duration-300 border-0 rounded-[20px] mx-6 mb-10'
              src={item.img}
              alt=""
            />
          ))}
        </div>
        <MdChevronRight className='opacity-1 cursor-pointer hover:opacity-1 fill-orange mb-10' onClick={slideRight} size={40} />
      </div>
    </>
  )
}

export default SideScroll