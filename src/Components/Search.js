import {MdSearch} from 'react-icons/md'

const Search = () =>{
    return (
        <>
            <div>
                <div className="relative">
                    <input type="text" className=' w-10 sm:w-52 md:w-72 lg:w-96  outline-none pt-[0.1rem] pb-[2px] rounded-sm pl-2 pr-16'/>
                <div className="">  
                    <MdSearch className="absolute right-0 top-0 bg-red-600 text-white w-14 h-7 rounded-r-sm "/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Search