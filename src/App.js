import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
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
                <a href="#skills">Skills</a>
                <a href="#works">Work</a>
                <a href="#contact">Contact</a>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
      <div className={styles.bodyContainer}>
        <Container>
          <div className={styles.separate}>
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
              <Col md={12} lg={5} className={styles.rotation}>
                <div className={styles.box}>
                  <div className={styles.content}>
                    <div className={styles.core}></div>
                    <div className={styles.a + ' ' + styles.face} id="face">
                      {' '}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                        alt="image"
                        width={100}
                        height={100}
                      ></img>
                    </div>
                    <div className={styles.b + ' ' + styles.face} id="b">
                      {' '}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="image"
                        width={100}
                        height={100}
                      ></img>
                    </div>
                    <div className={styles.c + ' ' + styles.face} id="c">
                      {' '}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                        alt="image"
                        width={100}
                        height={100}
                      ></img>
                    </div>
                    <div className={styles.d + ' ' + styles.face} id="d">
                      {' '}
                      <img
                        className={styles.imageSkills}
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
                        alt="image"
                        width={100}
                        height={100}
                      ></img>{' '}
                    </div>
                    <div className={styles.e + ' ' + styles.face} id="e">
                      {' '}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                        alt="image"
                        width={100}
                        height={100}
                      ></img>{' '}
                    </div>
                    <div className={styles.f} id="f">
                      {' '}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                        alt="image"
                        width={100}
                        height={100}
                      ></img>{' '}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>{' '}
          <div className={styles.separate}>
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
                  contact and non-conflict person. I enjoy interacting with
                  people both at work and outside of it. I love working in a
                  team, but I am equally good at working independently. <br />I
                  spend my free time with my family and friends. In winter I
                  love snowboarding. I spend the rest of my time coding :)
                </p>
                <p className={styles.tagHover}>&lt;/p&gt;</p>
              </Col>
            </Row>
          </div>{' '}
          <div className={styles.separate}>
            <Row>
              <Col lg={6} className={styles.headDiv}>
                <p className={styles.tagHover}>&lt;h2&gt;</p>
                <h2 id="skills" className={styles.aboutTitle}>
                  Skills
                </h2>
                <p className={styles.tagHover}>&lt;/h2&gt;</p>
                <p className={styles.tagHover}>&lt;p&gt;</p>
                <p className={styles.PnotesSkills}>
                  I started my programming adventure in April 2022. Interested
                  in ads, I completed a free html course which I really liked{' '}
                  <br />
                  Since then I have completed Bootcamp: Full Stack Plus which
                  lasted 10 months organized by Kodilla.com, passing the final
                  project with a score of 24/25 points <br />
                  Currently, I am training all the time on freecodecamp.org and
                  spend my free time on codewars.com and opening my own
                  projects. <br />
                  Frond-end is the closest to me, but I'm not afraid of
                  challenges
                </p>
                <p className={styles.tagHover}>&lt;/p&gt;</p>
              </Col>
              <Col lg={6}>
                <div className={styles.cirkle}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>
                  <img
                    className={styles.imageSkills}
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>{' '}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>{' '}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                    alt="image"
                    width={120}
                    height={100}
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>{' '}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                    alt="image"
                    width={190}
                    height={100}
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
                    alt="image"
                    width={100}
                    height={100}
                  ></img>
                </div>
              </Col>
            </Row>
            <div className={styles.separate}>
              {' '}
              <Row>
                <Col lg={12} className={styles.headDiv}>
                  <p className={styles.tagHover}>&lt;h2&gt;</p>
                  <h2 id="works" className={styles.aboutTitle}>
                    Work
                  </h2>
                  <p className={styles.tagHover}>&lt;/h2&gt;</p>
                  <p className={styles.tagHover}>&lt;p&gt;</p>
                  <p className={styles.PnotesContact}>
                    I use free hosts to publish my projects, so it may take a
                    while for them to load.
                  </p>
                  <p className={styles.tagHover}>&lt;/p&gt;</p>{' '}
                </Col>
                <Col>
                  <Card
                    style={{ width: '100%' }}
                    className={styles.card_wrapper}
                  >
                    <Card.Img src="./foto/fstep.PNG"></Card.Img>
                    <Button className={styles.card_button}>
                      View the project
                    </Button>
                  </Card>
                </Col>{' '}
                <Col>
                  <Card
                    style={{ width: '100%' }}
                    className={styles.card_wrapper}
                  >
                    1
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{ width: '100%' }}
                    className={styles.card_wrapper}
                  >
                    1
                  </Card>
                </Col>{' '}
                <Col>
                  <Card
                    style={{ width: '100%' }}
                    className={styles.card_wrapper}
                  >
                    1
                  </Card>
                </Col>{' '}
              </Row>
            </div>
            <div className={styles.separate}>
              <Row>
                <Col lg={6} className={styles.headDiv}>
                  <p className={styles.tagHover}>&lt;h2&gt;</p>
                  <h2 id="contact" className={styles.aboutTitle}>
                    Contact
                  </h2>
                  <p className={styles.tagHover}>&lt;/h2&gt;</p>
                  <p className={styles.tagHover}>&lt;p&gt;</p>
                  <p className={styles.PnotesContact}>
                    You can contact me by email or linked <br />
                    Email: patryk_slowinski@o2.pl <br />
                    Linked: <a href="/">Click here</a>
                  </p>
                  <p className={styles.tagHover}>&lt;/p&gt;</p>
                  <p className={styles.tagHoverBody}>&lt;/body&gt;</p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}

export default App
