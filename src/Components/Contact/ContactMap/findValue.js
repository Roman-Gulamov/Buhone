export const findValue = (name, values) => {
    switch (name) {
        case 'username':
            return values.username;
        case 'email':
            return values.email;
        case 'message':
            return values.message;
        default:
            return null;
    }
}