import {Link, useNavigate} from "react-router-dom";
import {Button} from 'antd';
import {ConnecetBtn} from "./common/ConnectButton";
import {useAccount} from 'wagmi'

const Header = () => {
    //@ts-ignore
    const {connector: activeConnector, isConnected} = useAccount()
    const navigate = useNavigate()
    const createButton = (
        <Button shape="round" type="primary" className={"bg-primary"} onClick={() => navigate("/create")}>
            Create
        </Button>
    )
    const reviewButton = (
        <Button shape="round" onClick={() => navigate("/article-verify")}>
            Review
        </Button>
    )

    return (
        <nav className="relative z-30">
            <div className="hidden md:flex items-center justify-between flex-nowrap gap-2 p-4 h-16">
                <Link to="/" className="flex flex-nowrap mr-5">
                    <div className="text-black text-3xl font-semibold italic">DecentNews.</div>
                </Link>
                <div className="md:flex justify-between flex-nowrap gap-16 p-4 mr-5">
                    <a href="/#top"
                          className="transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap ">
                        Top
                    </a>
                    <a href="/#all"
                          className="transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap ">
                        All
                    </a>
                    <Link to="https://github.com/Decentralized-News"
                          className="transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap ">
                        Documentation
                    </Link>
                </div>

                {isConnected ? (
                    <div className="md:flex justify-between flex-nowrap gap-5 p-4 mr-5">
                        {createButton}
                        {reviewButton}
                    </div>
                ) : (
                    <ConnecetBtn/>
                )}

            </div>
        </nav>
    );
};

export default Header;
