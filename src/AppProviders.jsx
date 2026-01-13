import React from 'react'
import { BlogProvider } from './context/BlogContext';

const AppProviders = ({ children }) => {
    return (
        <BlogProvider>
            {children}
        </BlogProvider>
    )
}

export default AppProviders;