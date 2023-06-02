import React from "react";

const SearchBars = () => {
    return (
        <form className="max-w-2xl px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-orange left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-4 pl-14 pr-4 text-white text-xl border rounded-2xl outline-none bg-black focus:placeholder:opacity-50 placeholder:text-orange placeholder:text-xl"
                />
            </div>
        </form>
    );
}

export default SearchBars