import { createContext } from "react";
import { BLOGDATA } from "../data/blogData";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    return (
        <BlogContext.Provider value={BLOGDATA}>
            {children}
        </BlogContext.Provider>
    );
}