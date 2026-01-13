import React from 'react'
import JokeCard from './ui/JokeCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './ui/BlogPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<JokeCard />} />
                <Route path='/blog' element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;