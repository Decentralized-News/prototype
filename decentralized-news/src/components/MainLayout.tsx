import React, {ReactNode} from "react";
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => (
    <div className="h-screen flex flex-col">
        <Header/>
        {children}
        <Footer/>
    </div>
);

export default MainLayout;
