import { NavLink } from "react-router";
import logo from "../../../assets/images/logo.png"

const Navbar = () => {

    const linkStyle = "font-bold"
    const navClass = ({ isActive }) => `${linkStyle} ${isActive ? 'text-primary underline' : ''}`

    return (
        <nav>
            <div className="max-w-325 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="h-10 w-10 " src={logo} alt="" />
                    <span className="text-primary font-bold">HERO.IO</span>
                </div>
                <ul className="flex gap-4 font-inter">
                    <NavLink className={navClass} to="/" >Home</NavLink>
                    <NavLink className={navClass} to="/apps" >Apps</NavLink>
                    <NavLink className={navClass} to="/installation" >Installation</NavLink>
                </ul>
                <button className="btn btn-primary">
                    <img src="" alt="" />
                    <span>Contribute</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;