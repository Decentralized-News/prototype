import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="relative z-30">
      <div>
        <div className="hidden md:flex items-center justify-between flex-nowrap gap-14 p-4 h-16">
          <Link to="/" className="flex flex-nowrap mr-5">
            <div className="text-black text-3xl font-semibold">DecentNews.</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
