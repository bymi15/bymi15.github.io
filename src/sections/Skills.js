import React from 'react';
import styles from '../assets/styles/Skills.module.scss';
import {
    faJava,
    faPython,
    faJs,
    faHtml5,
    faCss3Alt,
    faSass,
    faReact,
    faBootstrap,
    faNode,
    faLaravel,
    faPhp,
    faGitSquare,
    faDocker,
    faLinux,
    faJenkins,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import SkillRow from '../components/SkillRow';
import SkillSingle from '../components/SkillSingle';
import CheckList from '../components/CheckList';

const Skills = () => (
    <section id='skills'>
        <div className='w-100'>
            <h2 className='mb-5'>Skills</h2>
            <div className={styles.skillDiv}>
                <h4>Programming Languages</h4>
                <SkillRow>
                    <SkillSingle icon={faJava} text='Java' />
                    <SkillSingle text='C++' />
                    <SkillSingle text='C' />
                    <SkillSingle icon={faPython} text='Python' />
                    <SkillSingle icon={faJs} text='Javascript' />
                    <SkillSingle text='Haskell' />
                    <SkillSingle text='x86 Assembly' />
                </SkillRow>
                <h4>Front-end</h4>
                <SkillRow>
                    <SkillSingle icon={faReact} text='React' />
                    <SkillSingle icon={faHtml5} text='HTML' />
                    <SkillSingle icon={faCss3Alt} text='CSS' />
                    <SkillSingle icon={faSass} text='Sass' />
                    <SkillSingle icon={faBootstrap} text='Bootstrap' />
                    <SkillSingle text='Redux' />
                    <SkillSingle text='Ionic' />
                </SkillRow>
                <h4>Back-end</h4>
                <SkillRow>
                    <SkillSingle text='Django' />
                    <SkillSingle text='Django Rest Framework' />
                    <SkillSingle icon={faPhp} text='PHP' />
                    <SkillSingle text='MySQL' />
                    <SkillSingle icon={faLaravel} text='Laravel' />
                    <SkillSingle icon={faNode} text='NodeJS' />
                    <SkillSingle text='MongoDB' />
                </SkillRow>
                <h4>Others</h4>
                <SkillRow>
                    <SkillSingle icon={faGitSquare} text='Git' />
                    <SkillSingle icon={faDocker} text='Docker' />
                    <SkillSingle icon={faLinux} text='Linux' />
                    <SkillSingle icon={faJenkins} text='Jenkins' />
                    <SkillSingle icon={faWordpress} text='Wordpress' />
                </SkillRow>
                <h4>Workflow</h4>
                <CheckList
                    items={[
                        'Agile Development & Scrum',
                        'Version control with Git',
                        'Project management with Trello, Jira',
                        'Focus on responsive web design',
                        'Building scalable backend architectures',
                        'Unit testing and automated testing',
                        'Continuous integration and deployment',
                    ]}
                />
            </div>
        </div>
    </section>
);

export default Skills;
