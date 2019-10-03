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

  it("should handle addToCart", () => {
    expect(
      cartItems(initstate, {
        type: types.ADD_TO_CART,
        item
      })
    ).toEqual([...initstate, { id: 1, quantity: 1 }]);
  });

  it("should handle incQuant", () => {
    expect(
      cartItems(initstate, { type: types.INC_QUANT, item: { id: 2 } })
    ).toEqual([{ id: 2, quantity: 3 }, { id: 4, quantity: 1 }]);
  });

  it("should handle decQuatn", () => {
    expect(
      cartItems(initstate, { type: types.DEC_QUANT, item: { id: 2 } })
    ).toEqual([{ id: 2, quantity: 1 }, { id: 4, quantity: 1 }]);
  });
  it("should handle removeFromCart", () => {
    expect(
      cartItems(initstate, { type: types.REMOVE_FROM_CART, item: { id: 2 } })
    ).toEqual([{ id: 4, quantity: 1 }]);
  });
});
