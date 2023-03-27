import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RotatingMenu from '../Component/RotatingMenu/RotatingMenu';
import Slider from '../Component/Carousel/Carousel';
import CardList from '../Component/CoursesCard/CoursesCard';
import About from '../About/About';
import Contact from '../Contact/Contact';
// import Cube from '../Component/TestThree/Testthree';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 3000px;
  margin: auto;
`;

function Home() {
    const [isHome, setIsHome] = useState(true);
    const [isAbout, setIsAbout] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsHome(scrollTop <= window.innerHeight);
        setIsAbout(scrollTop > window.innerHeight && scrollTop <= 2 * window.innerHeight);
        setIsContact(scrollTop > 2 * window.innerHeight && scrollTop <= 4 * window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleMobile();
        window.addEventListener('resize', handleMobile);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleMobile);
        };
    }, []);

    const handleMobile = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    return (
        <Container>
            {!isMobile && <RotatingMenu showHome={isHome} showAbout={isAbout} showContact={isContact} />}
            <Slider/>
            <About/>
            <CardList/>
            <Contact/>
        </Container>
    );
};

export default Home;