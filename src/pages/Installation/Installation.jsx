import { useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledAppIdsFromLS } from "../../utilities/utilities";
import Title from "../../components/Title/Title";
import InstalledApps from "../InstalledApps/InstalledApps";
import { toast } from "react-toastify";

const Installation = () => {
    const apps = useLoaderData()
    const [installedAppIds, setInstalledAppsIds] = useState(() => getInstalledAppIdsFromLS().map(i => parseInt(i)))
    const installedApps = apps.filter(installedApp => installedAppIds.includes(installedApp.id))

    const handleUninstall = id => {
        const updateInstalled = installedAppIds.filter(installedAppId => installedAppId !== id)
        setInstalledAppsIds(updateInstalled)
        toast("You have Successfully Uninstalled This App")
        localStorage.setItem("appIds", JSON.stringify(updateInstalled))
    }

    return (
        <div className="bg-base-200 py-15">
            <Title title="Your Installed Apps" subTitle="Explore All Trending Apps on the Market developed by us"></Title>
            <div className="py-12 max-w-400 mx-auto">
                <div className="flex justify-between items-center py-5">
                    <h2 className="font-bold text-2xl">({installedAppIds.length}) Installed Apps </h2>
                    <select defaultValue="Medium" className="select select-md">
                        <option disabled={true}>Sort By Size</option>
                        <option>Medium Apple</option>
                        <option>Medium Orange</option>
                        <option>Medium Tomato</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-4">
                    {
                        installedApps.map(installedApp => <InstalledApps key={installedApp.id} installedApp={installedApp} handleUninstall={handleUninstall}></InstalledApps>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Installation;