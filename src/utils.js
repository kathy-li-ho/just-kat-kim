export const getValueIn = (context, ...path) => {
    let value = context;
    while (value !== undefined && value !== null && path.length) {
        value = value[path.shift()];
    }
    return value;
};

const documentTitleRegex =
    '(<div dir="auto" style="font-weight: 400;.*?</div>)';
const excessAttrRegex = '(dir="auto" style="line-height: 26px;")';
const linkStylesRegex = '(style="color: #47B5FA; text-decoration: none")';
const codeRegex =
    '(<div dir="auto" style="line-height: 26px;" class="ace-line "><code.*?</div>)';
const joinedRegex = [
    documentTitleRegex,
    codeRegex,
    linkStylesRegex,
    excessAttrRegex,
].join('|');
const removeRegex = new RegExp(joinedRegex, 'g');
const cssMaxHeightRegex = new RegExp('max-height: [0-9]{1,}px', 'g');
const cssHeightAuto = 'height: auto';

export const cleanDropboxHTML = dbstr => {
    const cleanString = dbstr.replace(removeRegex, '');
    const finalString = cleanString.replace(cssMaxHeightRegex, cssHeightAuto);
    return finalString;
};

export const insertContent = (
    htmlString,
    parentNode = document.querySelector('main')
) => {
    if (parentNode && !parentNode.innerHTML) {
        parentNode.insertAdjacentHTML('afterbegin', htmlString);
    }
};