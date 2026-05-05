import { Outlet } from "react-router";
import Menu from "../components/Menu";

function Layout() {
  return (
    <>
      <aside>
        <Menu />
      </aside>
      <main>
        <Outlet /> {/* traz as páginas */}
      </main>
    </>
  );
}

export default Layout;
