import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../app/Register';
import Login from '../app/login';
import Home from '../app/Home';
import AddProducts from '../app/Admin/AddProducts';
import { ProtectedRoute } from '../Services/ProtectedRoute';
import Dashboard from '../app/Admin/Dashboard';
import Profile from '../app/Profile';
import Products from '../app/Products';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
                <Route path="/admin/addproducts" element={<ProtectedRoute element={AddProducts} />} />
                <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
