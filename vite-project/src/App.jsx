import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Footer } from './components/footer/Footer';
import { Notfound } from './pages/Notfound';
function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/*' element={<Notfound/>} />
    </Routes>
    <Footer/>
    </>
  )
}
export default App;