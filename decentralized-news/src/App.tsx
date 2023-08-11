import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
