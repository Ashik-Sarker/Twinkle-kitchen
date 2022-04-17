import './App.css';
import NavBar from './Pages/Common/NavBar/NavBar';
import Footer from './Pages/Common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Home/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import CheckOut from './Pages/Home/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services/:serviceId' element=
        {
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
