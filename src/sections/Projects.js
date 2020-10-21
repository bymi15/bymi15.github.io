import React from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import { Row, Col } from 'reactstrap';
import getImagePathArr from '../helpers/getImagePathArr';

const Projects = () => (
    <section id='projects'>
        <div className='w-100'>
            <h2 className='mb-5'>Projects</h2>
            <Row>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='React-Edit-Text'
                        images={getImagePathArr('react-edit-text', 'png', 3)}
                        tags={['React', 'UI Component', 'Editable', 'Text', 'Open source', 'NPM package']}
                        link='https://github.com/bymi15/react-edit-text'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='Job Tracker Board'
                        images={getImagePathArr('jtb', 'png', 4)}
                        tags={['React', 'Redux', 'Django', 'Bootstrap']}
                        link='https://jobtrackerboard.herokuapp.com'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='Coding Academy Online Platform'
                        images={getImagePathArr('tocol', 'png', 4)}
                        tags={['React', 'Redux', 'Django', 'Websockets', 'WebRTC', 'RobotJS', 'ElectronJS', 'Nginx', 'Docker']}
                        link='https://tonyscoding.com'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='UCL Korean Society Forum'
                        images={getImagePathArr('uclks', 'png', 3)}
                        tags={['Laravel', 'PHP', 'MySQL']}
                        link='http://uclks.org'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='E-Commerce Platform'
                        images={getImagePathArr('ecom', 'png', 3)}
                        tags={['NodeJS', 'Express', 'MongoDB', 'Stripe API']}
                        link='https://shoppingplatform.herokuapp.com'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='Preorder Landing Page (Maplace)'
                        images={getImagePathArr('maplace', 'png', 3)}
                        tags={['JQuery', 'Javascript', 'HTML', 'CSS', 'Paypal API']}
                        link='http://maplace.co'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='Health Care App (NHS)'
                        images={getImagePathArr('nhs', 'png', 5)}
                        tags={['Ionic', 'Firebase', 'OpenEHR API', 'Android', 'IOS']}
                        link='https://github.com/bymi15/NHS-WhatsThePlan'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='Music TV Android App'
                        images={getImagePathArr('musicTV', 'png', 4)}
                        tags={['Android', 'Java', 'PHP', 'MySQL']}
                        link='https://devpost.com/software/music-tv-music-videos-for-the-masses-finally'
                    />
                </Col>
                <Col xs='12' sm='6' xl='4'>
                    <ShowcaseCard
                        title='2D Helicopter Game'
                        images={getImagePathArr('copter', 'png', 3)}
                        tags={['C', 'Java', 'Processing', 'Engduino (Arduino)']}
                        link='https://github.com/bymi15/EngduinoCopter'
                    />
                </Col>
            </Row>
        </div>
    </section>
);

export default Projects;
