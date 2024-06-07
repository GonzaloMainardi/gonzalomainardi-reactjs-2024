import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useProductsId } from "../hooks/useProductsId.jsx";
import { Button } from "react-bootstrap";
import { useCount } from "../hooks/useCount.jsx";

const ItemDetailsContainer = () => {
  const { product } = useProductsId();
  const { count, decrement, increment, addToCart } = useCount();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>PRECIO: ${product.price}</ListGroup.Item>
        <ListGroup.Item>STOCK: {product.stock}</ListGroup.Item>
        <ListGroup.Item>DESCUENTO: {product.discountPercentage}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="danger" onClick={decrement}>
          -
        </Button>
        <span>{count}</span>
        <Button variant="success" onClick={increment}>
          +
        </Button>
        <Button variant="warning" onClick={addToCart}>
          AGREGAR AL CARRITO
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailsContainer;
