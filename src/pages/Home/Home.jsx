import { Link, useLoaderData } from "react-router";
import Title from "../../components/Title/Title";
import Banner from "./Banner";
import App from "../App/App";

const Home = () => {

    const allApps = useLoaderData()
    // const trendingApps = [...allApps].slice(0, 8)
    const trendingApps = allApps
        .filter(trendApps => trendApps.downloads > 500000) // Downloads 700000 এর উপরে এবং ৮ টার বেশী না
        .slice(0, 8)

    return (
        <div>
            <Banner></Banner>
            <div className="bg-base-200 py-15">

                <div className="py-12 max-w-400 mx-auto">
                    <Title title="Trending Apps" subTitle="Explore All Trending Apps on the Market developed by us"></Title>
                    <div className="grid grid-cols-4 gap-4">
                        {
                            trendingApps.map(app => <App key={app.id} app={app} home></App>)
                        }
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link
                            to="/apps"
                            className="btn btn-lg text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-md"
                        >
                            Show All
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;