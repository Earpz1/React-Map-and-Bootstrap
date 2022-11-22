import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => (
  
    <Row className="align-content-end">
      <Col className="footer dark pb-5 pt-3">
        <footer>StriveBooks - {new Date().getFullYear()}</footer>
      </Col>
    </Row>

)
export default Footer
