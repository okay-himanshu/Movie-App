import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import Services from '../Pages/Services'
import Navbar from '../Components/Navbar'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                    <Route path='/movies' element={<Movies />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router