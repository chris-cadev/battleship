
export const randomValueFromEnum = (e: Record<string, string | number>): string | number => {
    const values = Object.keys(e);
    const randomIndex = Math.floor(Math.random() * values.length);
    return e[values[randomIndex] as keyof typeof e];
};