import { Col, Container, Row } from 'react-bootstrap'
import styles from './app.module.scss'
function App() {
  return (
    <main>
      <nav className={styles.nav}>
        <Container>
          <Row>
            <Col>
              <div className={styles.navLogo}>
                <p className={styles.navP}>P</p>
                <p>atrick</p>
              </div>
            </Col>
            <Col>
              <div className={styles.navLinks}>
                <a href="#1">About</a>
                <a href="#1">Skills</a>
                <a href="#1">Work</a>
                <a href="#1">Contact</a>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
      <div className={styles.bodyContainer}>
        <Container>
          <h1 className={styles.h}>1</h1>
        </Container>
      </div>
    </main>
  )
}

export default App
