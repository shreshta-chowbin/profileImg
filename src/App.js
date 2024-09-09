import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUP from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import InterForm from './components/InterForm';
import PageNotFound from './components/PageNotFound';
import StuDetails from './components/StuDetails';

function App() {
  return (
    <div className="App">

      <div>
        <BrowserRouter>
        <Routes>
          <Route path='*' element={<PageNotFound/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signUp' element={<SignUP/>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
          <Route path='/interForm' element={<InterForm/>}></Route>
          <Route path='/stuDetails' element={<StuDetails/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
