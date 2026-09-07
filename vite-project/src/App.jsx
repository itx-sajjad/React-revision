import Navbar from './components/navbar/Navbar';
import Button from './components/button/Button';
import './App.css'
import Counter from './components/counter/Counter';
function App(){
  return(
    <>
    <Navbar/>
    <div>Hello</div>
    <div className='container'>
      <Button title="login"/>
    <Button title="sign up"/>
    <Button title="send"/>
    </div>
    <Counter/>
    </>
  )
}
export default App;