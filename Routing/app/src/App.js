import logo from './logo.svg';
import './App.css';
import {Link,Routes,Route,Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <>
    <Link to='/'><h3>Home</h3></Link>
    <Link to='/About'><h3>About</h3></Link>
    <Link to='/Login'><h3>Login</h3></Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        {/* <Route path='/*' element={<h3>Error 404 Page not found</h3>}></Route> */}
        <Route path='/*'element={<Navigate to='/'/>}></Route>
      </Routes>
    </>
  );
}

export default App;
