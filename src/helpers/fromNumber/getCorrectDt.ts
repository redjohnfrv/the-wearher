export const getCorrectDt = (dt?: number) => {
    if (dt) {
        return Number(String(dt) + '000');
    }

    return Date.now();
};
