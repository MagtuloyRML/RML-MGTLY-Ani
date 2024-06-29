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
    path : '/RML-MGTLY-Ani/',
    element : <App />,
    children: [
      {
          path: '/RML-MGTLY-Ani/',
          element: <Home />,
      },
      {
          path: '/RML-MGTLY-Ani/AboutUs',
          element: <AboutUs />,
      },
      {
        path: '/RML-MGTLY-Ani/Watch/:id/:episodeId',
        element: <Watch />,
      },
      {
        path: '/RML-MGTLY-Ani/Search/:search/:searchPage',
        element: <Search />,
      },
      {
        path: '/RML-MGTLY-Ani/Search',
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
