export default (state = {}, action) => {
    switch (action.type) {
        case 'select_contact':
            console.log(action.payload);
            return { contact: action.payload };
        default: return state;
    }
};