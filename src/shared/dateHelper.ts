export const convertUTCDateToLocalDate = (
    dateTime: Date
): string | undefined => {
    if (!dateTime) {
        return undefined;
    }
    const newDate = `${new Date(dateTime).toLocaleDateString(
        "en-US"
    )} ${new Date(dateTime).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    })}`;

    return newDate;
};
