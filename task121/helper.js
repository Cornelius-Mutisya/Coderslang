export const min = (a, b, c) => {
  let least = 0;
  if (a < b) {
    if (a < c) {
      least = a;
    } else {
      least = c;
    }
  } else {
    if (b < c) {
      least = b;
    } else {
      least = c;
    }
  }
  return least;
};
