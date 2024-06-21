import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cart } = React.useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);
  return (
    <div>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon
          icon={faCartPlus}
          style={{ color: "white", fontSize: "1.2rem" }}
        />
        <span
          style={{ color: "white", fontSize: "1.2rem", marginLeft: "0.5rem" }}
        >
          {totalItems}
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
