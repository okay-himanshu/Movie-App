import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import Series from '../Pages/Series'
import Navbar from '../Components/Navbar'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/series' element={<Series />}></Route>
                    <Route path='/movies' element={<Movies />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router