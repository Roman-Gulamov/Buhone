export const findValue = (name, values) => {
    switch (name) {
        case 'name':
            return values.name;
        case 'surname':
            return values.surname;
        case 'message':
            return values.message;
        default:
            return null;
    }
}