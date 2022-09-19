import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../Context/Context";

const Search = () => {
    const { query, setQuery } = useGlobalContext()
    return (
        <>
            <div>
                <div className="relative">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            className=" sm:w-52 md:w-72 lg:w-96  outline-none pt-[0.1rem] pb-[2px] rounded-sm pl-2 pr-16"
                            placeholder="search"
                            value={query}
                            onChange={(e) => { setQuery(e.target.value) }}
                        />
                    </form>
                    <div>
                        <MdSearch
                            className="absolute right-0 top-0 bg-red-600 text-white w-14 h-7 rounded-r-sm "
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
