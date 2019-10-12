import { rootReducer } from "../reducers/index";

const initState = {
  items: {
    1: {
      id: 1,
      title: "Title",
      desc: "some desc",
      price: 110,
      img: "imgSrc",
      category: "winter",
      available: true
    },
    2: {
      id: 2,
      title: "Another Tittle",
      desc: "another desc",
      price: 80,
      img: "imgSrc",
      category: "new",
      available: true
    }
  },
  cartItems: [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 1 },
    { id: 4, quantity: 2 }
  ],
  filters: { categoryFilter: "All" }
};

describe("rootReducer", () => {
  it("should filter cart items that do not exist in items", () => {
    expect(rootReducer(initState, {})).toEqual({
      ...initState,
      cartItems: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
    });
  });
});
