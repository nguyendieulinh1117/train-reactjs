const { createSlice, createSelector } = require("@reduxjs/toolkit");
const initialState = {
  cartList: sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      //kiem tra sp da co trong gio hang chua?
      const itemIndex = state.cartList.findIndex(
        (item) =>
          item.product._id === action.payload.product._id &&
          item.pickColor === action.payload.pickColor
      );
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity += action.payload.quantity;
      } else {
        const tempProduct = { ...action.payload };
        state.cartList.push(tempProduct);
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    increaseQty: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) =>
          item.product._id === action.payload.product._id &&
          item.pickColor === action.payload.pickColor
      );
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity += 1;
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    decreaseQty: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) =>
          item.product._id === action.payload.product._id &&
          item.pickColor === action.payload.pickColor
      );
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity -= 1;
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    setQty: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) =>
          item.product._id === action.payload.product._id &&
          item.pickColor === action.payload.pickColor
      );
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity = action.payload.quantity;
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    removeCart: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) =>
          item.product._id === action.payload.product._id &&
          item.pickColor === action.payload.pickColor
      );
      if (itemIndex >= 0) {
        state.cartList.splice(itemIndex, 1);
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
  },
});
export const { addCart, increaseQty, decreaseQty, setQty, removeCart } =
  cartSlice.actions;
export const selectCarts = createSelector(
  (state) => ({
    cartList: state.cartState.cartList,
  }),
  (state) => state
);
export default cartSlice.reducer;
