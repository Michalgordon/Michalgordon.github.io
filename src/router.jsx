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
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <MyProjects />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
    ],
  },
]);

export default router;
