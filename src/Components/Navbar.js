import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png'
import Search from "./Search";


const Navbar = () => {
    const [toogle, setToogle] = useState(false);

    function handleToogle() {
        setToogle(!toogle)
    }

    return (
        <>
            <nav className="mt-2 pb-2 pt-2 pr-4 pl-4 flex justify-around sm:flex sm:justify-between sm:items-center ">
                <div className="sm:flex md:ml-6 lg:ml-10">
                    <div className="flex justify-center">
                        <img src={Logo} alt="logo" className="w-20 mr-3" />
                    </div>
                    <div className={`absolute top-12 left-0 pt-5 pb-14 w-full bg-[#414040] bg-opacity-90  ${!toogle ? '-translate-y-52 transition-transform ' : 'translate-y-0  transition-transform '} sm:ml-5 sm:inline-block sm:relative sm:-translate-y-0 sm:bg-transparent sm:pb-0 sm:pt-0 sm:top-0`}>
                        <ul className="flex flex-col items-center   sm:flex sm:flex-row sm:items-center  sm:space-x-2 font-semibold text-sm">
                            <li> <NavLink className="text-white 
                            sm:text-slate-300" to="/">Home</NavLink></li>
                            <li> <NavLink className="text-white 
                         sm:text-slate-300" to="/series">Series</NavLink></li>
                            <li>  <NavLink className="text-white sm:text-slate-300" to="/movie">Movie</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center absolute top-0 ${!toogle ? '-translate-y-40  transition-transform  ' : 'translate-y-36  transition-transform duration-1000'} sm:translate-y-0 sm:relative`}>
                    <Search />
                </div>
                <div className="text-white z-10 sm:hidden cursor-pointer" onClick={handleToogle} >
                    {
                        !toogle ?
                            <span >&#9776;</span>
                            : <span >&#x2715;</span>
                    }
                </div>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;
