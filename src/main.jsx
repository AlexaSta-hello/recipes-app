import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage'; 
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import ErrorPage from './pages/ErrorPage';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';

// Definiere die Routen
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/recipe/:id",
        element: <RecipePage />,
        children: [
          {
            path: "ingredients",
            element: <Ingredients />,
          },
          {
            path: "instructions",
            element: <Instructions />,
          },
        ],
      },
    ],
  },
]);



// React-Rendering
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
