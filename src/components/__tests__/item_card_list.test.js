import React from "react";
import ItemCardList from "../ItemCardList";
import { unmountComponentAtNode } from "react-dom";
import { act, create } from "react-test-renderer";
import { defaultItems as items } from "../../normalizedItems";
import { BrowserRouter as Router } from "react-router-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Mock state and function
const mock = jest.fn();
const props = {
  visibleItems: Object.values(items).slice(0, 4),
  cartObject: { 1: { id: 1, quantity: 1 }, 4: { id: 4, quanity: 2 } },
  handleItemClick: mock
};

// Tests
describe("ItemCardList component", () => {
  const container = create(
    <Router>
      <ItemCardList {...props} />
    </Router>
  );
  it("Should match the snapshot", () => {
    expect(container.toJSON()).toMatchSnapshot();
  });
  it("Should dispatch handleItemClick on button click", () => {
    // Click all hadndleItemClick buttons
    act(() => {
      container.root
        .findAllByProps({
          "data-target": "slide-out"
        })
        .map(i => i.props.onClick());
    });
    expect(props.handleItemClick).toHaveBeenCalledTimes(4);
    expect(props.handleItemClick).toHaveBeenNthCalledWith(
      1,
      items[1],
      props.cartObject
    );
    expect(props.handleItemClick).toHaveBeenNthCalledWith(
      2,
      items[2],
      props.cartObject
    );
    expect(props.handleItemClick).toHaveBeenNthCalledWith(
      3,
      items[3],
      props.cartObject
    );
    expect(props.handleItemClick).toHaveBeenNthCalledWith(
      4,
      items[4],
      props.cartObject
    );
  });
  it("Should include Link to /shop/items/ID", () => {
    // Get all Link.to locations
    const links = container.root
      .findAllByProps({ className: "red-text" })
      .reduce((acc, i) => (i.props.to ? [...acc, i.props.to] : acc), []);
    expect(links).toStrictEqual([
      "/shop/items/1",
      "/shop/items/2",
      "/shop/items/3",
      "/shop/items/4"
    ]);
  });
});
