import { createBrowserRouter } from 'react-router-dom';
import { routerPath } from './constant';
import App from 'components/app/App';
import Blog from 'components/sections/blog/Blog';
import BlogOutlet from 'components/sections/blog/BlogOutlet';
import Contact from 'components/sections/contact/Contact';
import Developer from 'components/sections/developer/Developer';
import Techstack from 'components/sections/techstack/Techstack';
import BlogPosts from 'src/library/blog-posts/BlogPosts';

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
                element: <BlogOutlet />,
                children: [
                    {
                        path: routerPath.start,
                        element: <Blog />,
                    },
                    {
                        path: routerPath.post,
                        element: <BlogPosts />,
                    },
                ],
            },

            {
                path: routerPath.contact,
                element: <Contact />,
            },
        ],
    },
]);
