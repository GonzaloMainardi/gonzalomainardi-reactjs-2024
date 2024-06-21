import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemListContainer = ({products }) => {
  return (
    <div className="itemListContainer">
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem", margin: 10 }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title style={{ fontSize: 25 }}>{product.title}</Card.Title>
              <Card.Text style={{ fontSize: 18 }}>
                {product.description}
              </Card.Text>
              <Button variant="primary">
                {" "}
                <Link
                  to={`/item/${product.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  VER DETALLE
                </Link>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
