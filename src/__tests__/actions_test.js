import * as actions from "../actions";
import * as types from "../constants";
import ItemImg from "../images/swshoe.png";

const item = {
  id: 42,
  title: "Item Title",
  desc: "Item Description",
  price: 110,
  img: ItemImg,
  category: "winter",
  available: true
};

const payload = {
  key: 42,
  properties: { propertyName: "New property value" }
};

const filter = "filter value";

describe("actions", () => {
  it("should return the item to be added to cart", () => {
    const expectedAction = {
      type: types.ADD_TO_CART,
      item
    };
    expect(actions.addToCart(item)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should return the item to be removed from cart", () => {
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      item
    };
    expect(actions.removeFromCart(item)).toEqual(expectedAction);
  });
});

describe("incQuant", () => {
  it("should return the item to have its quantity increased", () => {
    const expectedAction = {
      type: types.INC_QUANT,
      item
    };
    expect(actions.incQuant(item)).toEqual(expectedAction);
  });
});

describe("decQuant", () => {
  it("should return the item to have its quantity decreased", () => {
    const expectedAction = {
      type: types.DEC_QUANT,
      item
    };
    expect(actions.decQuant(item)).toEqual(expectedAction);
  });
});

describe("itemChange", () => {
  it("should return the item id and the changed properties", () => {
    const expectedAction = {
      type: types.ITEM_CHANGE,
      payload
    };
    expect(actions.itemChange(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should return the item to be removed from shop", () => {
    const expectedAction = {
      type: types.REMOVE_FROM_SHOP,
      item
    };
    expect(actions.removeFromShop(item)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should return the item to be added to shop", () => {
    const expectedAction = {
      type: types.ADD_TO_SHOP,
      item
    };
    expect(actions.addToShop(item)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should return the category filter", () => {
    const expectedAction = {
      type: types.VISIBILITY_FILTER,
      filter
    };
    expect(actions.setCategoryFilter(filter)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should return the price filter", () => {
    const expectedAction = {
      type: types.SORT_BY,
      filter
    };
    expect(actions.setPriceFilter(filter)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should return the target item filter", () => {
    const expectedAction = {
      type: types.SEARCH_ITEMS,
      filter
    };
    expect(actions.setTargetItem(filter)).toEqual(expectedAction);
  });
});
