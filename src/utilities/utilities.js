const getInstalledAppIdsFromLS = () => {
    return JSON.parse(localStorage.getItem("appIds")) || []
}

const setInstallAppsIdsToLS = id => {
    const previousInstalledIds = getInstalledAppIdsFromLS()
    const installedIds = [...previousInstalledIds, id]
    const installedIdsString = JSON.stringify(installedIds)
    localStorage.setItem("appIds", installedIdsString)

}

export { getInstalledAppIdsFromLS, setInstallAppsIdsToLS }

const getSortByDownloadsLS = () => {
    return localStorage.getItem("sort") || ""
}

const setSortByDownloadsLS = sortByDownload => {
    localStorage.setItem("sort", sortByDownload)
}

export { getSortByDownloadsLS, setSortByDownloadsLS }