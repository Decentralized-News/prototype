import {Link} from "react-router-dom";
import { Button } from 'antd';

const Header = () => {

    const connectButton = (
        <Button>
            Connect
        </Button>
    )

    return (
        <nav className="relative z-30">
            <div className="hidden md:flex items-center justify-between flex-nowrap gap-14 p-4 h-16">
                <Link to="/" className="flex flex-nowrap mr-5">
                    <div className="text-black text-3xl font-semibold">DecentNews.</div>
                </Link>
                {connectButton}
            </div>
        </nav>
    );
};

export default Header;
