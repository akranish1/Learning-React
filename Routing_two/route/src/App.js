import { Link,BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Protected from './util/Protected';

function App() {
  return (
    <BrowserRouter>
     <Link to='/'><h3>Home</h3></Link>
    <Link to='/profile'><h3>Profile</h3></Link>
    <Link to='/Login'><h3>Login</h3></Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
