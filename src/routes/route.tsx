import { createBrowserRouter } from "react-router";
import MainLayoutes from "../Layouts/MainLayoutes";
import { Contact, Home } from "lucide-react";
import Experience from "../page/Experience";
import Project from "../page/project";
import Skill from "../page/Skill";




export const router = createBrowserRouter([



    {
        path:'',
        element:<MainLayoutes/>,
        children:[

            {
                path:'/',
                element:<Home/>

            },
            {
                path:'/exeperience',
                element:<Experience/>
            },
            {
                path:'/project',
                element:<Project/>
            },
            {
                path:'/skill',
                element:<Skill/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }



])


