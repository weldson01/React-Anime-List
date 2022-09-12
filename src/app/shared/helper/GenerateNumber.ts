export const Generator = (max: number): number => {
  const dice = Number.parseInt((Math.random() * max).toFixed(0));
  return dice;
};
