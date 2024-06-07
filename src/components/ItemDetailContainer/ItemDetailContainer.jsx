import React from "react";
import { useCount } from "../../hooks/useCount";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";

const ItemDetailContainer = ({ product }) => {
  const { count, decrement, increment, addToCart } = useCount();

  return (
    <div style={{ alignContent: "center" }}>
      <Card className="text-center">
        <Card.Header>
          <Card.Img style={{ width: 100 }} src={product.thumbnail} />
          {product.title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
            PRECIO: ${product.price}
          </Card.Text>
          <ButtonGroup className="btn-group-carrito">
            <Button variant="danger" onClick={decrement}>
              -
            </Button>
            <span className="counter">{count}</span>
            <Button variant="success" onClick={increment}>
              +
            </Button>
            <Button variant="warning" onClick={addToCart}>
              AGREGAR AL CARRITO
            </Button>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer className="text-muted">STOCK: {product.stock}</Card.Footer>
      </Card>
      <ButtonGroup className="btn-group-acciones">
        <Button variant="dark">
          {" "}
          <Link
            to={`/`}
            style={{
              color: "white",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            TODOS LOS PRODUCTOS
          </Link>
        </Button>
        <Button variant="info">
          {" "}
          <Link
            to={`/category/${product.category}`}
            style={{
              color: "white",
              textDecoration: "none",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            CATEGORIA: {product.category}
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemDetailContainer;
