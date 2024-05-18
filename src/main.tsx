import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRouterElements } from './router/router';

const appRouter = createBrowserRouter(createRouterElements(), {
    basename: '/',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);
