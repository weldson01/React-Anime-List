export const Generator = (max: number): number => {
  const dice = Number.parseInt((Math.random() * max).toFixed(0));
  console.log(dice);
  return dice;
};
