import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import('./App.jsx'));
import './index.css'
const Home = lazy(() => import('./components/Home/Home.jsx'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs.jsx'));
const Search = lazy(() => import('./components/Search/Search.jsx'));
const Watch = lazy(() => import('./components/Stream/Watch.jsx'));
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound/PageNotFound.jsx'
import { StartSearching } from './components/Search/NoResultFound.jsx'
import { StartUp } from './components/Function/LoadingContent.jsx'

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
    <Suspense fallback={<StartUp />} >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Suspense>
  </React.StrictMode>,
)
