import { Link } from "react-router";

const App = ({ app, link }) => {
    const { id, title, image, downloads, ratingAvg } = app
    const appContainer = <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <img
            src={image}
            alt={title}
            className="h-52 w-full rounded-xl"
        />

        <div className="mt-4 space-y-3">
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    {title}
                </h2>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                    Downloads:
                    <span className="ml-1 font-semibold text-gray-800">
                        {downloads}
                    </span>
                </p>

                <p className="rounded-full bg-yellow-100 px-3 py-1 font-medium text-yellow-700">
                    ⭐ {ratingAvg}
                </p>
            </div>

            <button className="w-full rounded-xl bg-[#632EE3] py-2.5 font-medium text-white transition hover:opacity-90">
                View Details
            </button>
        </div>
    </div>
    return (
        link === "app" ? (
            <Link to={`/appDetails/${id}`}>{appContainer}</Link>
        ) : (
            appContainer
        )
    );
};

export default App;