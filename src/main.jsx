import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Search from './components/Search/Search.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Watch from './components/Stream/Watch.jsx'
import { PageNotFound } from './components/PageNotFound/PageNotFound.jsx'
import { StartSearching } from './components/Search/NoResultFound.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children: [
      {
          path: '/',
          element: <Home />,
      },
      {
          path: '/AboutUs',
          element: <AboutUs />,
      },
      {
        path: '/Watch/:id/:episodeId',
        element: <Watch />,
      },
      {
        path: '/Search/:search/:searchPage',
        element: <Search />,
      },
      {
        path: '/Search',
        element: <StartSearching />,
      },
    ],
    errorElement : <PageNotFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
