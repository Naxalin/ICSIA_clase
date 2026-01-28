import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CountryDetails from "../components/CountryDetails";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root-data",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const res = await fetch("https://restcountries.com/v3.1/region/europe");
      if (!res.ok) throw new Error("Error de red");
      return res.json();
    },
    children: [
      {
        path: "country/:countryName",
        element: <CountryDetails />,
      }
    ]
  }
]);

export default router;