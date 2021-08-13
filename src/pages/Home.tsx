import { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import homeObjs from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const sections = homeObjs.map(homeObj => <InfoSection key={homeObj.id} {...homeObj} />);
    sections.splice(2, 0, <Services key="services" />);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            {sections.map(section => section)}
        </>
    );
};

export default Home;
