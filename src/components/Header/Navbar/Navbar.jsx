import { NavLink } from "react-router";
import logo from "../../../assets/images/logo.png"
import { FaGithub } from "react-icons/fa";


const Navbar = () => {

    const linkStyle = "font-bold px-4 py-2 rounded-md"
    const navClass = ({ isActive }) => `${linkStyle} ${isActive ? 'text-white bg-[#632EE3] underline' : ''}`

    return (
        <nav className="py-6">
            <div className="max-w-325 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="h-10 w-10 " src={logo} alt="" />
                    <span className="text-[#632EE3] font-bold">HERO.IO</span>
                </div>
                <ul className="flex gap-4 font-inter">
                    <NavLink className={navClass} to="/" >Home</NavLink>
                    <NavLink className={navClass} to="/apps" >Apps</NavLink>
                    <NavLink className={navClass} to="/installation" >Installation</NavLink>
                </ul>
                <button className="btn text-white bg-[#632EE3] rounded-md">
                    <FaGithub className="text-lg" />
                    <span>Contribute</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;