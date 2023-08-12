import {Link} from "react-router-dom";
import {Button} from 'antd';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnecetBtn } from "./common/ConnectButton";
import { useAccount } from 'wagmi'

const Header = () => {
    // const { isAuth } = FUNCTIONFORVARIFICATION()
    //@ts-ignore
    const { connector: activeConnector, isConnected } = useAccount()


    const connectButton = (
        <Button shape="round">
            Connect
        </Button>
    )
    const createButton = (
        <Button shape="round" type="primary" className={"bg-primary"}>
            Create
        </Button>
    )
    const reviewButton = (
        <Button shape="round">
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
                    <Link to="/hot"
                          className="transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap ">
                        Top
                    </Link>
                    <Link to="/hot"
                          className="transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap ">
                        All
                    </Link>
                    <Link to="/hot"
                          className="transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap ">
                        Be A Writer
                    </Link>
                    <Link to="/hot"
                          className="transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap ">
                        Reach out
                    </Link>
                </div>
                {/*todo: isAuth needs to be added*/}
                
                {isConnected ? (
                    <div className="md:flex justify-between flex-nowrap gap-5 p-4 mr-5">
                        {createButton}
                        {reviewButton}
                    </div>
                ) : (
                    <ConnecetBtn />
                )}

            </div>
        </nav>
    );
};

export default Header;
