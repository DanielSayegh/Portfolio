import React from 'react';
import Section from './Section.jsx';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Work = () => (
    <Section 
        title="Work Experience" 
        className="work-root" 
        icon={faLaptopCode} 
        iconColor="#0f62fe"
    >
        <h1 className="company sa">Student Association</h1>
        <div className="role">
            <div className="role-name">Software Developer Intern</div>
            <div className="time">February 2019 - May 2021</div>
        </div>

        <div className="description">
            My primary role at the Student Association involved creating internal tools and systems that boost the productivity of Student Association employees through development of new technologies as well as simplification of current ones.
            
            In my role, I've led the successful development and deployment of multiple internal web applications. I designed and maintained a digital dynamic database containing easily accessed and current information for over 300 organizations on campus.
            
            My responsibilties have included the design, development, deployment, testing, and maintenance of these applications.
        </div>
    </Section>
)

export default Work;