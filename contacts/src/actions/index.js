export const selectContact = (contact) => {
    return {
        type: 'select_contact',
        payload: contact
    };
};