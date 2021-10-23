/// <reference types="jest" />
/**
 * @jest-environment jsdom
 */

import {createElement} from "./index";

describe("createElement", () => {
  test("element of correct type is made", () => {
    const div = createElement({ type: "div" });
    expect(div.nodeName).toMatch("DIV");
  });

  test("text is added", () => {
    const div = createElement({ type: "div", text: "Hello" });
    expect(div.textContent).toMatch("Hello");
  });

  test("text with variable is added", () => {
    const div = createElement({ type: "div", text: `Hey ${2 + 2}` });
    expect(div.textContent).toMatch("Hey 4");
  });

  test("attributes are added", () => {
    const div = createElement({
      type: "div",
      attributes: [
        ["data-crap", "butt"],
        ["id", "yo"],
        ["classes", ["Hey", "yo", "what"]],
      ],
    });
    expect(div.getAttribute("data-crap")).toMatch("butt");
    expect(div.id).toMatch("yo");
    expect(div.classList.contains("data-crap")).toBe(false);
    expect(div.classList.contains("Hey")).toBe(true);
    expect(div.classList.contains("yo")).toBe(true);
    expect(div.classList.contains("what")).toBe(true);
  });

  test("children are rendered", () => {
    const div = createElement({
      type: "div",
      children: [
        {
          type: "p",
          text: "Yolo",
        },
        {
          type: "a",
          attributes: [["href", "hey.com"]],
        },
      ],
    });

    const p = div.querySelector("p");
    const a = div.querySelector("a");
    expect(p.textContent).toMatch("Yolo");
    expect(a.href).toMatch("hey.com");
  });

  test("ref is made", () => {
    const x: { [key: string]: any } = {};
    createElement.call(x, { type: "div", ref: "Yo" });
    expect(x.Yo.nodeName).toMatch("DIV");
  });
});
