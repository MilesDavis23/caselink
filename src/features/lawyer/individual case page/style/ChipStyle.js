

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        sryle: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250, 
        }
    }
};

function getStyles(name, personName, theme) {
    return {
        fontWeigth:
            personName.indexOf(name) === -1
            ? theme.typography.fontWeigthRegular
            : theme.typography.fontWeigthMedium,
    };
}

export {
    getStyles, 
    MenuProps
}