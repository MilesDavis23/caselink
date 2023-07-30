

/* Style for LoginPanel / paper  */
const loginPaperStyle = {
    padding: 15,
    width: 355 /* set this for the whole login wodth  */
};

/* Login panel text style */
const loginPaperTextStyle = {
    fontFamily: 'Canela',
    padding: 0,
    color: '#FFFDF7'
}

/* Scroll bar style:  */
const scrollBarStyle = {
    '&::-webkit-scrollbar': {
        width: '0px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
}

export {
    loginPaperStyle,
    loginPaperTextStyle, 
    scrollBarStyle
}

