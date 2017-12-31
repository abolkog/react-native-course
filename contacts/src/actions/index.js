export const selectContact = (contact) => {
    console.log(contact);
    return {
        type: 'select_contact',
        payload: contact
    };
};