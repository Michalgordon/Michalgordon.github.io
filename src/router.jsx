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
        path: "michalgordon.github.io/about",
        element: <AboutMe />,
      },
      {
        path: "michalgordon.github.io/projects",
        element: <MyProjects />,
      },
      {
        path: "michalgordon.github.io/contact",
        element: <ContactMe />,
      },
    ],
  },
]);

export default router;
