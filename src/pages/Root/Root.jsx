import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-325 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;