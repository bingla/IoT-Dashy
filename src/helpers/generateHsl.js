export const hsl = () => {
  const hue = Math.floor(Math.random() * 365);
  const saturation = Math.floor(Math.random() * 70 + 25);
  const lightness = Math.floor(Math.random() * 10 + 65);
  return { hue, saturation, lightness };
};

export const randomHsl = (numColours) => {
  let colours = [];
  for (let i = 0; i < numColours; i++) {
    colours.push(hsl());
  }
  return colours;
};
