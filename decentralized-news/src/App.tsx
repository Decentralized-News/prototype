import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ArticelDetail from "./components/detailArticel/ArticelDetail.tsx";
import {ConfigProvider} from "antd";

function App() {
    const router = createBrowserRouter([
        {path: "/", element: <Home/>},
        {path: "/articel-detail", element: <ArticelDetail/>},
        {path: "*", element: <Navigate to="/"/>},
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
        </ConfigProvider>);
}

export default App;
