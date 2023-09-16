


const getColor = (status) => {
    let glowEffect = '0 0 10px ';
    switch (status) {
        case 'added':
        case 'created':
            return { color: '#95AFBA', textShadow: glowEffect + '#95AFBA' }; // cadet grey
        case 'active':
            return { color: '#38A700', textShadow: glowEffect + '#38A700' }; // kelly green
        case 'offer sent':
            return { color: '#FFBC0A', textShadow: glowEffect + '#FFBC0A' };
        case 'closed':
            return { color: '#C5283D', textShadow: glowEffect + '#C5283D' }; // cardinal
    }
};

export default getColor;
