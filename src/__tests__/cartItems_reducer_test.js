import cartItems from "../reducers/cart";
import * as types from "../constants";

const initstate = [{ id: 2, quantity: 2 }, { id: 4, quantity: 1 }];

const item = {
  id: 1,
  title: "Title",
  desc: "some desc",
  price: 110,
  img: "imgSrc",
  category: "winter",
  available: true
};

describe("cartItems reducer", () => {
  it("should return the initial state", () => {
    expect(cartItems(initstate, {})).toEqual(initstate);
  });

  it("should handle adding an item to cart", () => {
    expect(
      cartItems(initstate, {
        type: types.ADD_TO_CART,
        item
      })
    ).toEqual([...initstate, { id: 1, quantity: 1 }]);
  });

  it("should handle increasing cart item quantity", () => {
    expect(
      cartItems(initstate, { type: types.INC_QUANT, item: { id: 2 } })
    ).toEqual([{ id: 2, quantity: 3 }, { id: 4, quantity: 1 }]);
  });

  it("should handle decreasing cart item quantity", () => {
    expect(
      cartItems(initstate, { type: types.DEC_QUANT, item: { id: 2 } })
    ).toEqual([{ id: 2, quantity: 1 }, { id: 4, quantity: 1 }]);
  });

  it("should not decrease cartItem quantity below 1", () => {
    expect(
      cartItems(initstate, {
        type: types.DEC_QUANT,
        item: { id: 4 }
      })
    ).toEqual([{ id: 2, quantity: 2 }, { id: 4, quantity: 1 }]);
  });

  it("should handle removing an item from cart", () => {
    expect(
      cartItems(initstate, { type: types.REMOVE_FROM_CART, item: { id: 2 } })
    ).toEqual([{ id: 4, quantity: 1 }]);
  });
});
