const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const appError = (error) => {
    return {
        type: 'APP_ERROR',
        error: error
    }
}

export {
    menuLoaded,
    menuRequested,
    appError
}