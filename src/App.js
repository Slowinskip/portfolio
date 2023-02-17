import { useState } from 'react'
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
                <a href="#about">About</a>
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
          <Row>
            <Col md={12} lg={7} className={styles.headDiv}>
              <p className={styles.tagHoverBody}>&lt;body&gt;</p>
              <p className={styles.tagHover}>&lt;h1&gt;</p>
              <h1>
                <span className={styles.letterHover}>HI</span>
                <br />
                <span className={styles.letterHover}>My </span>
                <span className={styles.letterHover}>name </span>
                <span className={styles.letterHover}>is </span>
                <span className={styles.letterHover}>Patryk</span>
                <br />
                <span className={styles.letterHover}>passionate </span>
                <span className={styles.letterHover}>Web </span>
                <span className={styles.letterHover}>Developer </span>
              </h1>
              <p className={styles.tagHover}>&lt;/h1&gt;</p>
            </Col>
            <Col md={12} lg={5} className={styles.headDiv}>
              <div className={styles.loader}>
                <div className={styles.face}>
                  <div className={styles.circle}></div>
                </div>
                <div className={styles.face}>
                  <div className={styles.circle}></div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className={styles.headDiv}>
              <p className={styles.tagHover}>&lt;h2&gt;</p>
              <h2 id="about" className={styles.aboutTitle}>
                About me
              </h2>
              <p className={styles.tagHover}>&lt;/h2&gt;</p>
              <p className={styles.tagHover}>&lt;p&gt;</p>
              <p className={styles.PnotesAbout}>
                I am from Poland and currently live in Wrocław. <br />I am a
                contact and non-conflict person. I enjoy interacting with people
                both at work and outside of it. I love working in a team, but I
                am equally good at working independently. <br />I spend my free
                time with my family and friends. In winter I love snowboarding.
                I spend the rest of my time coding :)
              </p>
              <p className={styles.tagHover}>&lt;/p&gt;</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className={styles.headDiv}>
              <p className={styles.tagHover}>&lt;h2&gt;</p>
              <h2 id="about" className={styles.aboutTitle}>
                Skills
              </h2>
              <p className={styles.tagHover}>&lt;/h2&gt;</p>
              <p className={styles.tagHover}>&lt;p&gt;</p>
              <p className={styles.PnotesSkills}>
                I started my programming adventure in April 2022. Interested in
                ads, I completed a free html course which I really liked <br />
                Since then I have completed Bootcamp: Full Stack Plus which
                lasted 10 months organized by Kodilla.com <br />
                Currently, I am training all the time on freecodecamp.org and
                spend my free time on codewars.com and opening my own projects.{' '}
                <br />
                Frond-end is the closest to me, but I'm not afraid of challenges
              </p>
              <p className={styles.tagHover}>&lt;/p&gt;</p>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </div>
    </main>
  )
}

export default App
