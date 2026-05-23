import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Header/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
    const navigation = useNavigation()
    return (
        <div className="relative min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <ToastContainer />
                {
                    navigation.state === "loading"
                        ?
                        <div className="absolute inset-0 flex justify-center items-center">
                            <p className="text-2xl">
                                <span className="loading loading-dots loading-xl"></span>
                            </p>
                        </div>
                        :
                        <Outlet />
                }


            </main>
            <footer></footer>
        </div>
    );
};

export default Root;