export const isValid = (a, b, c) => {
  return (
    !isNaN(a) &&
    !isNaN(b) &&
    !isNaN(c) &&
    (a > 0 && b > 0 && c > 0) &&
    a + b > c &&
    b + c > a &&
    c + a > b
  );
};

export const isEquilateral = (a, b, c) => {
  return a === b && b === c;
};

export const isIsosceles = (a, b, c) => {
  return (a === b && c !== a) || (b === c && a !== b) || (c === a && b !== c);
};

export const isScalene = (a, b, c) => {
  return a !== b && b !== c;
};
