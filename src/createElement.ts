interface IEl {
  type: string;
  attributes?: string[][] | any;
  ref?: string;
  text?: string;
  children?: IEl[];
}

export default function createElement(obj: IEl): HTMLElement {
  const el = document.createElement(obj.type);
  obj.attributes?.forEach((attrTuple: any) => {
    if (attrTuple[0] === "classes") {
      el.classList.add(...attrTuple[1]);
    } else {
      el.setAttribute(attrTuple[0], attrTuple[1]);
    }
  });
  el.textContent = obj.text;
  if (obj.ref) {
    this[obj.ref] = el;
  }
  if (obj.children) {
    obj.children.forEach((child) => {
      el.appendChild(createElement.call(this, child));
    });
  }

  return el;
}
