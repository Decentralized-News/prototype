import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";

import Home from "./components/home/Home";
import { ConfigProvider } from "antd";
import CreateArticle from "./components/create/CreateArticle";
import ArticleDetail from "./components/detailArticle/ArticleDetail.tsx";
import ArticleDetailVerify from "./components/detailArticle/ArticleDetailVerify.tsx";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { APIURL } from "./utils/constants.tsx";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: APIURL,
});

//@ts-ignore
const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: "DecentNews",
    //@todo put in env variables
    projectId: "2b2716d320b6f79fcfa35fbd6b575f87",
    chains,
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/article-detail", element: <ArticleDetail /> },
        { path: "/article-verify", element: <ArticleDetailVerify /> },
        { path: "/create", element: <CreateArticle /> },
        { path: "*", element: <Navigate to="/" /> },
    ]);

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} modalSize="compact">
                <ApolloProvider client={client}>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: "#7465BE",
                            },
                        }}
                    >
                        <RouterProvider router={router}></RouterProvider>
                    </ConfigProvider>
                </ApolloProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default App;
