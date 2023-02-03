// import Spinner from '../Components/Spinner'
import { useEffect, useState, useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchCount, setSearchCount] = useState(0);
  const [, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("batman");
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(
        `https://www.omdbapi.com/?apikey=727bbdc1&s=${query}`
      );
      const res = await req.json();
      if (res.Response === "True") {
        setTimeout(() => {
          setMovies(res.Search);
          setIsLoading(false);
          setIsNothingFound(false);
          setIsInvalidInput(false);
        }, 500);
      } else {
        setIsError({
          show: true,
          msg: res.error,
        });
        setIsInvalidInput(true);
      }
      if (query === "") {
        setIsNothingFound(true);
        setIsLoading(false);
        setIsInvalidInput(false);
      }
      setSearchCount(res.Search.length);
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      getMovies();
    }, 300);
    // clean up function
    return () => clearTimeout(interval);
  }, [query]);
  return (
    <>
      <AppContext.Provider
        value={{
          movies,
          searchCount,
          query,
          setQuery,
          isLoading,
          isNothingFound,
          isInvalidInput,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
export { useGlobalContext };
