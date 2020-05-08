export function capitalize(string) {
    if (typeof string === 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return '';
}

export function removeHTMLTags(string) {
    if (typeof string === 'string') {
        const regex = /(<([^>]+)>)/ig;
        return string.replace(regex, '');
    }

    return '';
}
