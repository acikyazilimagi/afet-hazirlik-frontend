export const toPascaleCase = (str: string) => {
  return str.replace(
    /\w+/g,
    (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()
  );
};
