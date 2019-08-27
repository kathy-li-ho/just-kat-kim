export const getValueIn = (context, ...path) => {
    let value = context;
    while (value !== undefined && value !== null && path.length) {
        value = value[path.shift()];
    }
    return value;
};
