import { createBrowserRouter } from 'react-router-dom';
import { routerPath } from './constant';
import App from 'components/app/App';
import Blog from 'components/sections/blog/Blog';
import Contact from 'components/sections/contact/Contact';
import Developer from 'components/sections/developer/Developer';
import Techstack from 'components/sections/techstack/Techstack';

export const createRouterElements = createBrowserRouter([
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
                element: <Blog />,
            },

            {
                path: routerPath.contact,
                element: <Contact />,
            },
        ],
    },
]);
