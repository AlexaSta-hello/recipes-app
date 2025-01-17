import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage'; 
import HomePage from './pages/HomePage';

// Definiere die Routen
const router = createBrowserRouter([
  {
    path: "/", // Parent Route
    element: <App />,
    children: [
      {
        path: "/", // Child Route 1: Startseite
        element: <HomePage />,
      },
      {
        path: "/about", // Child Route 2: About-Seite
        element: <AboutPage />,
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
