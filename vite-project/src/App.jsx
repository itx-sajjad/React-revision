import Navbar from './components/navbar/Navbar';
import Button from './components/button/Button';
import './App.css'
import Counter from './components/counter/Counter';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Footer } from './components/footer/Footer';
function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about ' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login ' element={<Login/>} />
    </Routes>
    <Footer/>

    {/* <Navbar/>
    <div>Hello</div>
    <div className='container'>
      <Button title="login"/>
    <Button title="sign up"/>
    <Button title="send"/>
    </div>
    <Counter/> */}
    </>
  )
}
export default App;