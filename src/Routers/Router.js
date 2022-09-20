import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
// import Movies from '../Pages/Movies'
import Series from '../Pages/Series'
import Navbar from '../Components/Navbar'
import SingleMovie from '../Components/SingleMovie'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/series' element={<Series />}></Route> 
                    <Route path='movies/:id' element={<SingleMovie />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router