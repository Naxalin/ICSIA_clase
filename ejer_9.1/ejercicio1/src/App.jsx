import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PostsListPage from "./pages/PostsListPage";
import PostDetailPage from "./pages/PostDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "posts", element: <PostsListPage /> },
      { path: "posts/:id", element: <PostDetailPage /> }, // 🔴 ESTO ES CLAVE
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
