const getCurrentYear = () => {
    const dateTime = new Date();
    return dateTime.getFullYear();
}

const getFooterCopy = (isIndex) => {
    if (isIndex) {
        const str = "Holberton School";
        return <span dangerouslySetInnerHTML={{ __html: str }} />;
    } else {
        const str = "Holberton School main dashboard";
        return <span dangerouslySetInnerHTML={{ __html: str }} />;
    }
}

export default { getCurrentYear, getFooterCopy };
