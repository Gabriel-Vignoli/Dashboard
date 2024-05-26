import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Layout from "./pages/itens/Layout";
import ListItens from "./pages/itens/ListItens";
import CreateList from "./pages/itens/CreateList";
import ShowIten from "./pages/itens/ShowIten";
import UpdateIten from "./pages/itens/UpdateIten";
import Home from "./pages/home/Home";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "itens",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <ListItens /> },
        { path: "new", element: <CreateList /> },
        { path: ":id", element: <ShowIten /> },
        { path: ":id/update", element: <UpdateIten /> }
      ]
    }
  ]
}])

export default router;