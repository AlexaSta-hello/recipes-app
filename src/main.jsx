import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage'; 
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';

// Definiere die Routen
const router = createBrowserRouter([
  {
    path: "/", // Parent Route
    element: <App />,
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
