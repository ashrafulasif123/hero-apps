import { FaDownload, FaStar } from "react-icons/fa";

const InstalledApps = ({ installedApp, handleUninstall }) => {
    const { id, image, title, description, downloads, ratingAvg, size } = installedApp
    return (
        <div className="flex flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center">

            {/* Left Side */}
            <div className="flex gap-4">

                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="h-28 w-28 rounded-2xl object-cover"
                />

                {/* Content */}
                <div className="space-y-3">

                    {/* Title + Description */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {title}
                        </h2>

                        <p className="mt-1 max-w-xl text-sm leading-6 text-gray-600">
                            {description}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-5 text-sm text-gray-700">

                        <div className="flex items-center gap-2">
                            <FaDownload className="text-[#632EE3]" />
                            <span>{downloads}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaStar className="text-yellow-500" />
                            <span>{ratingAvg}</span>
                        </div>

                        <div>
                            <span className="font-medium text-gray-800">
                                {size} MB
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right Side Button */}
            <div className="md:ml-auto">
                <button onClick={() => handleUninstall(id)}
                    className="btn btn-error text-white">
                    Uninstall
                </button>
            </div>

        </div>
    );
};

export default InstalledApps;