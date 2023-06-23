import React, { useState } from 'react';

interface CheckBoxProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onChange(event);
    };

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <div className="relative flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded-full">
                <div
                    className={`absolute inset-0 flex items-center justify-center ${checked ? 'bg-orange' : 'bg-white'
                        } rounded-full`}
                >
                    {checked && (
                        <svg
                            className="w-3 h-3 text-white fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                    )}
                </div>
            </div>
        </label>
    );
};

export default CheckBox;
