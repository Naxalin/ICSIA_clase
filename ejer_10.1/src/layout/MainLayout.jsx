import { Outlet, useLoaderData } from "react-router-dom";
import ColumnLeft from "../components/ColumnLeft";

function MainLayout() {
  const paises = useLoaderData() || [];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      <aside style={{ width: "350px", borderRight: "1px solid #ddd", backgroundColor: "#f4f7fe" }}>
        <ColumnLeft paises={paises} />
      </aside>
      <main style={{ flex: 1, padding: "30px", overflowY: "auto" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;