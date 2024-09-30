import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import { store } from './store'
import { Provider } from 'react-redux'
import Home from './routes/Home.tsx';
import ErrorPage from './error-page.tsx';
import Movies from './routes/Movies.tsx';
import MyLists from './routes/MyLists.tsx';
import MyList from './routes/MyList.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'mylists',
        element: <MyLists />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/list/',
        element: <MyList />,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <NextUIProvider>
      <RouterProvider router={router} /> 
    </NextUIProvider>
  </Provider>
)
