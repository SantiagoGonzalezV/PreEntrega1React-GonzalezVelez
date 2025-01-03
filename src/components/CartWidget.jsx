import React from "react";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
        alt="Carrito"
        className="cart-icon"
      />
      <span className="cart-count">5</span>
    </div>
  );
};

export default CartWidget;