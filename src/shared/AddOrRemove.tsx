import React, { useState } from 'react';

interface CartItemProps {
    initialCount: number;
}

const AddOrRemove: React.FC<CartItemProps> = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const handleAddItem = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleRemoveItem = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="flex items-center">
            <button
                className="w-10 h-10 bg-gray-500 rounded-full"
                onClick={handleRemoveItem}
            >
                <p className='text-4xl text-white'>-</p>
            </button>
            <span className="mx-7 text-black text-lg">{count}</span>
            <button
                className="w-10 h-10 bg-orange rounded-full"
                onClick={handleAddItem}
            >
                <p className='text-4xl text-white'>+</p>
            </button>
        </div>
    );
};

export default AddOrRemove;