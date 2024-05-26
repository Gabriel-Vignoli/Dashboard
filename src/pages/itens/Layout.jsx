import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
  const { pathname } = useLocation()

  return (
    <main>
      <h1>Stock Itens</h1>
      <div className="tabs">
        <Link to="/itens" className={`tab ${pathname === "/itens" ? "active" : ""}`}>All Itens</Link>
        <Link to="/itens/new" className={`tab ${pathname === "/itens/new" ? "active" : ""}`}>New Item</Link>
      </div>
      <Outlet />
    </main>
  )
}