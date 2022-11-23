import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import scifi from '../Data/scifi.json'

const Scifi = () => (
  <Container className="w-100">
    <Row>
      {scifi.map((book) => (
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
export default Scifi
