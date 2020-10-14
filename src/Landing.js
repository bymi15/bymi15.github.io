import React from 'react';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Sidebar from './components/Sidebar';
import Loader from './components/Loader';
import './assets/styles/Landing.scss';

const Landing = () => {
    const [isLoading, setLoading] = React.useState(true);
    React.useEffect(() => setLoading(false), []);

    return isLoading ? (
        <Loader />
    ) : (
        <React.Fragment>
            <Sidebar />
            <div className='landing container-fluid'>
                <About />
                <hr />
                <Experience />
                <hr />
                <Projects />
                <hr />
                <Skills />
                <hr />
                <Contact />
            </div>
        </React.Fragment>
    );
};
export default Landing;
