import items from "../reducers/items";
import * as types from "../constants";

const initstate = {
  1: {
    id: 1,
    title: "Title",
    desc: "some desc",
    price: 110,
    img: "imgSrc",
    category: "winter",
    available: true
  }
};

describe("items reucer", () => {
  it("should return the initial state", () => {
    expect(items(initstate, {})).toEqual(initstate);
  });

  it("should handle item property changes", () => {
    expect(
      items(initstate, {
        type: types.ITEM_CHANGE,
        payload: {
          key: 1,
          properties: {
            title: "New Title",
            price: 42,
            category: "New CATEGORY"
          }
        }
      })
    ).toEqual({
      1: {
        id: 1,
        title: "New Title",
        desc: "some desc",
        price: 42,
        img: "imgSrc",
        category: "new category",
        available: true
      }
    });
  });
  it("should add an item to shop", () => {
    expect(
      items(initstate, {
        type: types.ADD_TO_SHOP,
        item: {
          title: "Added Item Title",
          desc: "Added Item Desc",
          price: 42,
          img: "imgSrc",
          category: "ADDED Category",
          available: true
        }
      })
    ).toEqual({
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
        title: "Added Item Title",
        desc: "Added Item Desc",
        price: 42,
        img: "imgSrc",
        category: "added category",
        available: true
      }
    });
  });

  it("should handle remove item from shop", () => {
    expect(
      items(initstate, {
        type: types.REMOVE_FROM_SHOP,
        item: { id: 1 }
      })
    ).toEqual({});
  });
});
