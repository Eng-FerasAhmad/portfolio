import App from '../components/app/App';
import Article from '../components/sections/article/Article';
import Contact from '../components/sections/contact/Contact';
import Developer from '../components/sections/developer/Developer';
import Project from '../components/sections/project/Project';
import Techstack from '../components/sections/techstack/Techstack';
import { routerPath } from './constant';
import type { RouteObject } from 'react-router';

export const createRouterElements = (): RouteObject[] => [
    {
        path: routerPath.home,
        element: <App />,
        children: [
            {
                path: routerPath.home,
                element: <Developer />,
            },
            {
                path: routerPath.developer,
                element: <Developer />,
            },
            {
                path: routerPath.techstack,
                element: <Techstack />,
            },
            {
                path: routerPath.blog,
                element: <Article />,
            },
            {
                path: routerPath.projects,
                element: <Project />,
            },
            {
                path: routerPath.contact,
                element: <Contact />,
            },
        ],
    },
];
