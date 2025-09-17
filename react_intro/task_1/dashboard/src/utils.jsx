const getCurrentYear = () => {
    const dateTime = new Date();
    return dateTime.getFullYear();
}

const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}

export default { getCurrentYear, getFooterCopy };
