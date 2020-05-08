export function capitalize(string) {
    if (typeof string !== 'string') return null;
    return string.charAt(0).toUpperCase() + string.slice(1);
};
