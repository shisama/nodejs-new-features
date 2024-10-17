export const func = (type) => {
    if (type === 'string') {
        return 'Hello, World!';
    }
    if (type === 'number') {
        return 100;
    }
    if (type === 'boolean') {
        return true;
    }
    if (type === 'object') {
        return { key: 'value' };
    }
    if (type === 'array') {
        return [1, 2, 3];
    }
    if (type === 'null') {
        return null;
    }
    throw new Error('Invalid type');
}