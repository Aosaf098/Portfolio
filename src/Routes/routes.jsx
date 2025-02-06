import MainLayout from "@/Layout/MainLayout";
import Home from "@/Pages/Home";
import Projects from "@/Pages/Projects";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            }
        ]
    }
])