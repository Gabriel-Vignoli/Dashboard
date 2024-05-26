import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">REACT STOCK</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/itens">Itens</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Made with React and React Router by Gabriel Vignoli!
      </footer>
    </>
  )
}