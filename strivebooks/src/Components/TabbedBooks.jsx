import { Tabs, Tab, Container, Row } from 'react-bootstrap'
import Fantasy from './Fantasy'
import Horror from './Horror'
import History from './History'
import Romance from './Romance'
import Scifi from './Scifi'

const TabbedBooks = () => (
  <Container className="w-100">
    <Row className="w-100">
      <Tabs defaultActiveKey="fantasy" className="w-100">
        <Tab eventKey="fantasy" title="Fantasy">
          <Fantasy />
        </Tab>
        <Tab eventKey="horror" title="Horror">
          <Horror />
        </Tab>
        <Tab eventKey="history" title="History">
          <History />
        </Tab>
        <Tab eventKey="romance" title="Romance">
          <Romance />
        </Tab>
        <Tab eventKey="scifi" title="Sci-Fi">
          <Scifi />
        </Tab>
      </Tabs>
    </Row>
  </Container>
)

export default TabbedBooks
