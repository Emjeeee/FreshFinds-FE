import React, { useState } from 'react'
import TrendFood from '../assets/trendFood.svg'
import { Heart } from 'react-feather'
import ActionButtonssss from "@/shared/ActionButtonssss"
import { SelectedPage } from "@/shared/types"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Card: React.FC<Props> = ({ setSelectedPage }: Props) => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="flex flex-col hover:scale-105 ease-in-out duration-300">
      <img
        className="object-cover object-center mx-14 h-w-52 w-52 inset-0 z-30"
        src={TrendFood}
        alt="Card Image"
      />
      <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-80 h-80 -mt-32">
        <div className="absolute bottom-0 p-6 w-full h-3/4">
          <h2 className="text-lg font-bold mb-2 text-center text-orange mt-7">Spaghetti Bolognese</h2>
          <div className="flex mb-2 justify-evenly">
            <p className="text-sm text-gray-700 mr-2">27 review</p>
            <p className="text-sm text-gray-700">4.8</p>
          </div>
          <div className="flex mb-2 justify-evenly mt-14">
            <p className="text-gray-700 flex items-center text-sm">
              <Heart
                className={`mr-2 cursor-pointer ${liked ? 'text-red-500 fill-red-500' : 'text-gray-500'
                  }`}
                onClick={handleLike}
              />
              2.7k Likes
            </p>
            <div className="text-end text-sm">
              <ActionButtonssss setSelectedPage={setSelectedPage}>
                Recipe ➤
              </ActionButtonssss>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card