import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router";
import Spinner from "./Spinner";

export default function SingleMovie() {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState('')
    const [loading,setLoading] = useState(false);

    const getData = async () => {
        setLoading(true)
        try {
            const req = await fetch(`http://www.omdbapi.com/?apikey=727bbdc1&i=${id}`);
            const res = await req.json()
            console.log(res);
            setMovieDetails(res)
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // go back btn 
    let goBack = useNavigate();
    const goBackBtn = (url) => {
        goBack(url)
    }    


    const { Poster, Title, Genre, Released, Director, imdbRating} = movieDetails
    return (

        <>
          {
            loading ? <Spinner />
            :
            <section className="mt-20 flex flex-col items-center bg-white pt-5 pb-5 mr-5 ml-5 rounded-md sm:flex-row sm:justify-start" >
            <img src={Poster} alt="poster-pic" className="w-60 object-cover rounded-md sm:ml-5"/>
            <div className="sm:ml-10">
                <p className="text-xl font-bold mt-2 sm:text-2xl">  {Title} </p>
                <p  className=""> 🌈 {Genre}</p>
                <p>  🗓️ {Released}</p>
                <p>  👱‍♂️ {Director} </p>
                <p>  🌟 {imdbRating}</p>
                <button className="mt-2 bg-red-500 w-full pt-2 pb-2 pr-1 pl-1 text-white font-semibold rounded-md hover:bg-white hover:text-red-500 transition-all hover:border  duration-500  sm:w-1/2" onClick={()=>{goBackBtn('/')}}>GO BACK</button>
            </div>
       </section>
          }
        </>
    )
}