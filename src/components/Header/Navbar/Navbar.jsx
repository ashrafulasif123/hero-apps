import { Link, NavLink } from "react-router";
import logo from "../../../assets/images/logo.png"
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(true)


    const linkStyle = "font-bold px-4 py-2 md:rounded-md"
    const navClass = ({ isActive }) => `${linkStyle} ${isActive ? 'text-white bg-[#632EE3] underline' : ''}`

    return (
        <nav className="py-4 border-b border-gray-300">
            <div className="relative px-4 2xl:px-0 max-w-325 mx-auto flex justify-between items-center">
                <GiHamburgerMenu onClick={() => setShowNavbar(!showNavbar)} className="block md:hidden h-6 w-6 text-[#632EE3]" />
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img className="h-12 w-12 " src={logo} alt="" />
                        <span className="text-[#632EE3] font-bold">HERO.IO</span>
                    </div>
                </Link>
                <ul
                    className={`w-50 rounded-lg bg-white border border-gray-300 absolute flex flex-col top-17 md:w-auto md:border-none md:static md:flex-row gap-y-2 md:gap-y-0 font-inter transition-all duration-300 ease-in-out overflow-hidden
                    ${showNavbar ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-4 max-h-0 pointer-events-none"}`}
                >
                    <NavLink className={navClass} to="/">Home</NavLink>
                    <NavLink className={navClass} to="/apps">Apps</NavLink>
                    <NavLink className={navClass} to="/installation">Installation</NavLink>
                </ul>
                <a
                    href="https://github.com/ashrafulasif123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white bg-[#632EE3] rounded-md flex items-center gap-2"
                >
                    <FaGithub className="text-lg" />
                    <span>Contribute</span>
                </a>
            </div>
        </nav >
    );
};

export default Navbar;