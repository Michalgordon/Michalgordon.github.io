import { Hero, AboutMe, MyProjects, ContactMe, ErrorPage } from "./pages";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/vite-project",
        element: <Hero />,
      },
      {
        path: "vite-project/about",
        element: <AboutMe />,
      },
      {
        path: "vite-project/projects",
        element: <MyProjects />,
      },
      {
        path: "vite-project/contact",
        element: <ContactMe />,
      },
    ],
  },
]);

export default router;
