const { createSlice, createSelector } = require("@reduxjs/toolkit");
const initialState = {
  cartList: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      //kiem tra co trong gio hang chua?
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
