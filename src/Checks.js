export const isValid = (a, b, c) => {
    return a + b > c && b + c > a && c + a > b && (a !== 0 && b !== 0 && c !== 0 );
}

export const isEquilateral = (a, b, c) => { 
    return a === b && b === c;
}

export const isIsosceles = (a, b, c) => { 
    console.log(a, b, c);
    return (a === b && c !== a) ||
           (b === c && a !== b) ||
           (c === a && b !== c);
}

export const isScalene = (a, b, c) => {
    return a !== b && b !== c;
}