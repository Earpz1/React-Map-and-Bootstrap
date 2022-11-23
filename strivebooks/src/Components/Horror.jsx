import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import horror from '../Data/horror.json'

const Horror = () => (
  <Container className="w-100">
    <Row>
      {horror.map((book) => (
        <Col className="w-100 mt-3" lg={4} key={book.asin}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                <Button>Buy: ${book.price}</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
)
export default Horror
