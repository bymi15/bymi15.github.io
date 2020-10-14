import React from 'react';
import ResumeRow from '../components/ResumeRow';

const Experience = () => (
    <section id='experience'>
        <div className='w-100'>
            <h2 className='mb-5'>Experience</h2>
            <ResumeRow
                jobTitle='Summer Technology Intern'
                company='American Express'
                desc='Used React, Redux and in-house modules to create a
                frontend module that can be used by customer care
                professionals to offer the best customer service.
                Improved UX by using predictive search dropdowns and
                collapsible panels for displaying data retrieved from
                the backend service. Implemented infinite scrolling and
                lazy loading to improve overall performance. Maintained
                100% test coverage with Jest and Enzyme. By the end of
                the internship, we managed to deploy the module to
                production.'
                date='July 2020 - August 2020'
            />
            <ResumeRow
                jobTitle='Software Developer'
                company='Tonys Elite Coding Academy'
                desc='Built a cross-platform hybrid application that allows 
                coding instructors to remotely teach students from various 
                academies in Seoul through a group chat that allows screen 
                sharing with remote desktop control access and voice chat. 
                Built the full-stack application with React, Electron and 
                Django and configured the live production server with Docker 
                and NGINX.'
                link='https://www.tonyscoding.com'
                date='July 2019 - August 2019'
            />
            <ResumeRow
                jobTitle='Paratrooper'
                company='Republic of Korea Marine Corps'
                desc='Participated in various combat training exercises 
                as rifleman and squad leader in the 21st Airborne Battalion. 
                Jumped from CH-47 and CH-53 aircrafts at 1300ft altitude 
                for parachute training exercises. Trained with the US Marines 
                in the KMEP joint military exercises.'
                date='August 2017 - April 2019'
            />
            <ResumeRow
                jobTitle='Web Developer'
                company='Maplace'
                desc='Built a responsive landing page with HTML, CSS, 
                JQuery/Javascript for a new startup. The page was 
                designed to attract investors for pre-ordering. 
                Integrated the Paypal API to incorporate a payment 
                system for processing the pre-orders.'
                link='http://maplace.co'
                date='October 2016 - June 2017'
            />
        </div>
    </section>
);

export default Experience;
