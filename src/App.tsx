import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom"
import { getRouter } from "./router"

export const AuthorizeConstext = createContext<any>(null);

export const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    return (
        <AuthorizeConstext.Provider value={{ token, setToken }}>
            <RouterProvider router={getRouter(token)} />
        </AuthorizeConstext.Provider>
    );
}