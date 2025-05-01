import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./styles/index.css";

// Pages import
import { About } from "./pages/About.tsx";
import { CardCollection } from "./pages/CardCollection.tsx";
import { Home } from "./pages/Home.tsx";

// Router creation
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection",
        element: <CardCollection />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
