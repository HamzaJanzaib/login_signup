import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import Register from "./components/app/Register"
import Login from './components/app/login';
import Home from './components/app/Home';

const App = () => {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
