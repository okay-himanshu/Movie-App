import { useGlobalContext } from "../Context/Context";
import { NavLink, useNavigate } from 'react-router-dom'

function Movies() {
    const { movies, searchCount } = useGlobalContext();

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path)
    }
    return (
        <>
            <h1 className="text-center text-white text-3xl">
                {searchCount} Results Found{" "}
            </h1>
            <div className="flex flex-wrap justify-center m-auto 2xl:mr-96 2xl:ml-96 ">
                {movies.map((currMovie, index) => {
                    const { Title, Poster, Year, imdbID } = currMovie;
                    return (
                        <div className="mr-5 ml-5 mt-5 mb-5 " key={index}>
                            <div className="wrapper">
                                <div className="w-44">
                                    <img
                                        src={Poster}
                                        alt="Poster-Pic"
                                        className="object-fit h-80 w-96  rounded-xl "
                                    />
                                </div>
                                <div className="text-white text-center">
                                    <p>
                                        {Title.length <= 15 ? Title : Title.substr(0, 15) + "..."}
                                    </p>
                                    <p>{Year}</p>
                                </div>
                                <div className="mt-3">
                                    <button onClick={() => handleNavigate(`movies/${imdbID}`)}
                                        className="bg-red-500 w-full text-white pt-1 pb-1 rounded hover:bg-white hover:text-red-500 transition-all duration-300">
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Movies;
