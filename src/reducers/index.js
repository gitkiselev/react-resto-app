const initialState = {
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true
            };
            case 'APP_ERROR':
                return {
                    menu: state.menu,
                    loading: false,
                    error: action.error
                };
        default:
            return state;
    }
}

export default reducer;