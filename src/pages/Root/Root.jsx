import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="max-w-325 mx-auto">
                    <Outlet />
                </div>
            </main>
            <footer></footer>
        </div>
    );
};

export default Root;