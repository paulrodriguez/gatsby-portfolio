import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';


const Skills = () => {
  //const { projects } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <h3>Backend</h3>
          <p>Proficient in: PHP, Python, MySQL, APIs.</p>
          <p>Familiar with: Redis, Flask, MongoDB, Microservices.</p>

          <h3>Frontend</h3>
          <p>Proficient in: HTML5, CSS3, SASS, JavaScript, Ajax.</p>
          <p>Familiar with: React, VueJS, LESS, Bootstrap.</p>

          <h3>Dev Tools</h3>
          <p>Git, Atom, Shell.</p>
          </Fade>
        </div>
      </Container>
      </section>

        );
  }

export default Skills;
