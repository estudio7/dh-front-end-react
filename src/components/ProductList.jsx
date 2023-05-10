import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Produto 1',
    description: 'Descrição do produto 1',
    category: 'Categoria X',
    price: 49.99,
  },
  // ... Adicione outros produtos conforme necessário
];

function ProductList() {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={3} lg={3}>
            <Product
              image={product.image}
              title={product.title}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
