import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import RootLayout from "./Layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import NewTaskPage from "./pages/NewTaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

const ProfilePage = lazy(() => import("./pages/ProfilePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <TaskListPage /> },
          { path: "new", element: <NewTaskPage /> },
          { path: "task/:taskId", element: <TaskDetailPage /> },
        ],
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Cargando perfil...</p>}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
