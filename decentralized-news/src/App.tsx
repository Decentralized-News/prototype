import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import { ConfigProvider } from "antd";
import CreateArticle from "./components/create/CreateArticle";
import ArticelDetail from "./components/detailArticel/ArticelDetail.tsx";

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/articel-detail", element: <ArticelDetail /> },
        { path: "/create", element: <CreateArticle /> },
        { path: "*", element: <Navigate to="/" /> },
    ]);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#7465BE",
                },
            }}
        >
            <RouterProvider router={router}></RouterProvider>
        </ConfigProvider>
    );
}

export default App;
