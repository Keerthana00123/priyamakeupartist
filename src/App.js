// import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Service from './pages/Service'

function App() { 

  return (
    <BrowserRouter>
    <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} /> 
          <Route path='/service' element={<Service/>}/>
    </Routes>
    </BrowserRouter>
  );

}
export default App;
