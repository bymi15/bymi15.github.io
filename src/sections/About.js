import React from 'react';
import styles from '../assets/styles/About.module.scss';
import {
    faGithub,
    faFacebookF,
    faLinkedinIn,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => (
    <section id='about'>
        <div>
            <h1>
                Hi, I'm
                <span className={styles.nameText}> Brian Min</span>
            </h1>
            <h3 className={styles.subText}>A final year computer science student at UCL</h3>
            <div className={styles.desc}>
                <p>I love building full stack web applications.</p>
                <p>
                    Most recently, i've been gaining industry experience in{' '}
                    <strong>React, Redux and Django</strong>.
                </p>
                <p>
                    In my free time I enjoy solving algorithms and data structure problems on{' '}
                    <strong>competitive programming platforms</strong> such as Codeforces and
                    Leetcode.
                </p>
                <p>
                    I also work on personal side projects including{' '}
                    <strong>full stack web development</strong> and{' '}
                    <strong>game engine development</strong>.
                </p>
                <p>
                    Currently, I am progressing through the fourth and final year of{' '}
                    <strong>MEng Computer Science</strong> degree at{' '}
                    <strong>University College London</strong>.
                </p>
            </div>
            <div className={styles.socialDiv}>
                <a
                    className={styles.socialIcon + ' ' + styles.github}
                    href='https://github.com/bymi15'
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    className={styles.socialIcon + ' ' + styles.linkedin}
                    href='https://www.linkedin.com/in/bymi15'
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    className={styles.socialIcon + ' ' + styles.stackoverflow}
                    href='https://stackoverflow.com/users/6213508/brian-min'
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faStackOverflow} />
                </a>
                <a
                    className={styles.socialIcon + ' ' + styles.facebook}
                    href='https://www.facebook.com/bymi15'
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                    className={styles.socialIcon + ' ' + styles.email}
                    href='mailto:bymi15@yahoo.com?Subject=bymi15.github.io%20-%20Enquiry'
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    </section>
);

export default About;
