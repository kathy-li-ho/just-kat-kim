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
const tooltipRegex = new RegExp('{<\/span><span>(<a target="_blank" )(.+?)<\/a><\/span><span>: (.+?)}', 'g');
const tooltipHTML = '$1class="tooltip" $2<span>$3</span></a>';

export const cleanDropboxHTML = dbstr => {
    const cleanString = dbstr.replace(removeRegex, '');
    const insertTooltipString = cleanString.replace(tooltipRegex, tooltipHTML);
    const finalString = insertTooltipString.replace(
        cssMaxHeightRegex,
        cssHeightAuto
    );
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
