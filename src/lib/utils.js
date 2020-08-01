export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const handleReference = (ref) => {
    switch (ref) {
        case 'g': return 'GitHub'
        case 'i': return 'Instagram';
        case 't': return 'Twitter';
        default: return 'Without reference';
    }
}

/**
 * Generates unique string ID
 * @param length {number}
 * @returns {string} unique ID
 */
export const generateId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

/**
 * Parses location query string
 * Input: ?field1=value1&field2=value2
 * Output: { field1: value1, field2: value2 }
 *
 * @param query {string}
 * @returns {Object}
 */
export const parseQuery = (query) => {
    query = query.slice(1);
    const fields = query.split('&');

    const result = {};
    fields.forEach(it => {
        const [field, value] = it.split('=');
        result[field] = value;
    });

    return result;
}