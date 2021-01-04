import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => {
  const { hero } = useContext(PortfolioContext);
  const {subtitle1, subtitle2, subtitle3, subtitle4, subtitle5 } = hero;
  return (
    <span>
    I am a&nbsp;
  <Typing loop={true}>
  <Typing.Delay ms={1000} />
  Web Developer.
  <Typing.Delay ms={1000} />
  <Typing.Backspace count={15} />
  Programmer.
  <Typing.Delay ms={1000} />
  <Typing.Backspace count={11} />
  Software Developer.
  <Typing.Delay ms={1000} />
  <Typing.Backspace count={19} />
  Software Engineer.
  <Typing.Delay ms={1000} />
  <Typing.Backspace count={18} />
  Problem Solver.
  <Typing.Reset count={0} delay={1000} />
  </Typing>
  </span>
)
};

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta,subtitle1, subtitle2, subtitle3, subtitle4, subtitle5 } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <span> (Not the comedian)</span>
            <br />
            <AnimatedTypingComponent />
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
