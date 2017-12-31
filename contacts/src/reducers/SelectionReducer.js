export default (state = {}, action) => {
    switch (action.type) {
        case 'select_contact':
            return { contact: action.payload };
        default: return state;
    }
};