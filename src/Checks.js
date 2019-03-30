export const isValid = (a, b, c) => {
    return a + b > c && b + c > a && c + a > b;
}

export const isEquilateral = (a, b, c) => { 
    return a === b === c;
}

export const isIsosceles = (a, b, c) => { 
    return a === b && c !== a ||
           b === c && a !== b ||
           c === a && b !== c;
}

export const isScalene = (a, b, c) => { 
    return a !== b && b !== c;
}