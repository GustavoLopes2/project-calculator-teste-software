export function add(a, b) {
  return Number(a) + Number(b);
}

export function subtract(a, b) {
  return Number(a) - Number(b);
}

export function multiply(a, b) {
  return Number(a) * Number(b);
}

export function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return Number(a) / Number(b);
}
