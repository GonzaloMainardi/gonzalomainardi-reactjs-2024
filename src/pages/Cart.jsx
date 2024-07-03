import React from "react";
import { CartContext } from "../context/CartContext";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const removeOneItem = (item) => {
    removeFromCart(item, 1);
  };

  const deleteItem = (item) => {
    deleteFromCart(item);
  };

  const total = cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);

  return (
    <div>
      <h3 class="titulo-principal">CARRITO DE COMPRAS</h3>
      {cart.length > 0 ? (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {cart.map((item, index) => (
              <div key={index}>
                <Card key={item.id} style={{ width: "18rem", margin: 10 }}>
                  <Card.Img variant="top" src={item.thumbnail} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: 25 }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      PRECIO: ${item.price * item.cantidad}
                    </Card.Text>
                    <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      CANTIDAD: {item.cantidad}
                    </Card.Text>
                    <ButtonGroup className="btn-group-carrito">
                      <Button
                        variant="danger"
                        onClick={() => removeOneItem(item)}
                      >
                        -
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => deleteItem(item)}
                      >
                        ELIMINAR
                      </Button>
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <h3 class="titulo-principal">TOTAL: ${total}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="success"
              onClick={() =>
                Swal.fire({
                  title: "COMPRA REALIZADA CON EXITO",
                  text: "MUCHAS GRACIAS POR CONFIAR EN HI FIVE",
                  icon: "success",
                  timer: 2000,
                  showConfirmButton: false,
                })
              }
            >
              FINALIZAR COMPRA
            </Button>
          </div>
        </div>
      ) : (
        <h3 class="carrito-vacio">
          TU CARRITO SE ENCUENTRA VACIO{" "}
          <FontAwesomeIcon
            icon={faFaceSadTear}
            style={{ color: "white", fontSize: "2rem" }}
          />
        </h3>
      )}
    </div>
  );
};

export default Cart;
