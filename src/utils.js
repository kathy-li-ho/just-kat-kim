export const getValueIn = (context, ...path) => {
    let value = context;
    while (value !== undefined && value !== null && path.length) {
        value = value[path.shift()];
    }
    return value;
};

export const cleanDropboxHTML = dbstr => {
    let cleanString = dbstr
    cleanString = dbstr.replace(/(<div dir="auto" style="font-weight: 400;.*?<\/div>)|(dir="auto" style="line-height: 26px;" )/g, '');
    return cleanString;
};
