import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";
import { HomePage } from "./routes/HomePage";
import { ProjectsPage, loader as proyectosLoader } from "./routes/ProjectsPage";import { ProjectDetailsPage, tareasLoader } from "./routes/ProjectDetailsPage";
import { NewProjectPage, action as newProjectAction } from "./routes/NewProjectPage";
import ReactDOM from "react-dom/client";
import { NewTaskPage, action as newTaskAction } from "./routes/NewTaskPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/proyectos",
        element: <ProjectsPage />,
        loader: proyectosLoader,
      },
      {
        path: "/proyectos/nuevo",
        element: <NewProjectPage />,
        action: newProjectAction,
      },
      {
        path: "/proyectos/:projectId",
        element: <ProjectDetailsPage />,
        loader: tareasLoader,
      },
      {
        path: "/proyectos/:projectId/nueva-tarea/",
        element: <NewTaskPage />,
        action: newTaskAction,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);