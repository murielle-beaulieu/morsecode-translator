export const createEl = (elType, text, parent) => {
  const el = document.createElement(elType);
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  parent.appendChild(el);
};

export const removeAllChildren = (parent) => {
  console.log(parent.firstChild, "first child");
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};
