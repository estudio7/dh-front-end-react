import React from 'react';
import { Card } from 'react-bootstrap';

function Product({ image, title, description, category, price }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <br />
          Categoria: {category}
          <br />
          Preço: R$ {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
