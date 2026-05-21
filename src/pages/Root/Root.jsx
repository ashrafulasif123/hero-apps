import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {/* <div className="max-w-325 mx-auto px-4 2xl:px-0"> */}
                <Outlet />
                {/* </div> */}
            </main>
            <footer></footer>
        </div>
    );
};

export default Root;