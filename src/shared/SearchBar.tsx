const SearchBar = () => {
  return (
    <>
        <form action="">
            <div className="ml-auto bg-black flex rounded-[23px] text-base font-bold text-orange w-full h-[3.5rem] items-center pl-5 gap-3">
            <svg    
            xmlns = "http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 26 28" 
            stroke-width="2.4" 
            stroke="currentColor" 
            width="30"
            height="30">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input 
                type="search"
                placeholder="Search"
                className="w-full bg-transparent focus:outline-none h-7"
            >

            </input>

            </div>
        </form>
    </>
  )
}

export default SearchBar