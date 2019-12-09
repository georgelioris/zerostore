import React from "react";
import CartItemList from "../CartItemList";
import { unmountComponentAtNode } from "react-dom";
import { act, create } from "react-test-renderer";
import { defaultItems } from "../../normalizedItems";

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

// Mock state and actions
const mock = jest.fn();
const items = defaultItems;
const cartItems = [{ id: 1, quantity: 1 }, { id: 4, quantity: 2 }];
const props = {
  items: items,
  cartItems: cartItems,
  incQuant: mock,
  decQuant: mock,
  removeFromCart: mock
};

// Tests
describe("CartItemList component", () => {
  const container = create(<CartItemList {...props} />);
  it("Matches the snapshot", () => {
    expect(container.toJSON()).toMatchSnapshot();
  });
  it("Should dispatch incQuant/decQaunt on button click", () => {
    // Click all incQuant and decQaunt buttons
    act(() => {
      container.root
        .findAllByProps({
          className: "btn-floating white"
        })
        .map(i => i.props.onClick());
    });

    expect(props.incQuant).toHaveBeenCalledTimes(2);
    expect(props.decQuant).toHaveBeenCalledTimes(2);
    expect(props.incQuant).toHaveBeenNthCalledWith(1, { id: 1, quantity: 1 });
    expect(props.incQuant).toHaveBeenNthCalledWith(2, { id: 4, quantity: 2 });
    expect(props.decQuant).toHaveBeenNthCalledWith(1, { id: 1, quantity: 1 });
    expect(props.decQuant).toHaveBeenNthCalledWith(2, { id: 4, quantity: 2 });
  });
  it("Should dispatch removeFromCart on button click", () => {
    // Click all removeFromCart buttons
    act(() => {
      container.root.findAllByProps({
        className: "remove"
      });
    });

    expect(props.removeFromCart).toHaveBeenCalledTimes(2);
    expect(props.removeFromCart).toHaveBeenNthCalledWith(1, {
      id: 1,
      quantity: 1
    });
    expect(props.removeFromCart).toHaveBeenNthCalledWith(2, {
      id: 4,
      quantity: 2
    });
  });
});
