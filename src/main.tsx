import { StrictMode } from 'react'
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
import MyList from './routes/MyList.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movies",
    element: <MyList />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <RouterProvider router={router} /> 
      </NextUIProvider>
    </Provider>
  </StrictMode>,
)
