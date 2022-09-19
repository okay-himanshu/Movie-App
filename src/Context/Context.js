// import Spinner from '../Components/Spinner'
import { useEffect, useState, useContext } from 'react'
import { createContext } from 'react'

// const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`
export const AppContext = createContext()

const Context = ({ children }) => {

    // const [isLoading,setIsLoading] = useState(false)
    const [movies, setMovies] = useState([]);
    const [searchCount, setSearchCount] = useState(0);
    const [isError, setIsError] = useState({ show: 'false', msg: "" })
    const [query, setQuery] = useState("batman");

    const getMovies = async () => {
        try {
            const req = await fetch(`http://www.omdbapi.com/?apikey=727bbdc1&s=${query}`);
            const res = await req.json();
            if (res.Response === "True") {
                setMovies(res.Search)
            } else {
                setIsError({
                    show: true,
                    msg: res.error
                })
            }
            setSearchCount(res.Search.length);
        } catch (error) {
            console.warn(error);
        }
    }
    useEffect(() => {
        const interval = setTimeout(() => {
            getMovies()
        }, 1000)
        return () => clearTimeout(interval)
    }, [query])
    return (
        <>
            <AppContext.Provider value={{ movies, searchCount, query, setQuery }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default Context