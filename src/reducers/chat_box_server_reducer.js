function serverReducer(state= {info: "Click Button"}, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'SIGNUP':
            return action.payload;
        default:
            break;
    }
    return {...state};
}

export default serverReducer;