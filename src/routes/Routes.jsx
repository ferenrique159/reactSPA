import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth";
import { Souerce } from "./Source";
import { DcPage, MarvelPage, HeroesApp, SearchPage, HeroPage } from "../heroes";

export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <Souerce />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HeroesApp/>,
            },
            {
                path: "marvel",
                element: <MarvelPage />,
            },
            {
                path: "dc",
                element: <DcPage />,
            },
            {
                path: "buscar",
                element: <SearchPage />,
            },
            {
                path: "hero/:id",
                element: <HeroPage />,
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);