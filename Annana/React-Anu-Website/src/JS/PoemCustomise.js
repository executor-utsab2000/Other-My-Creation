export const PoemCustomise = (poemData) => {
  const dataArray = poemData.split("\n");
  const html = dataArray.map((line) => `<div>${line}</div>`).join("");
  return html;
};
