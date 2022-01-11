import React from 'react';
import Section from './Section.jsx';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => (
    <Section 
        title="Education" 
        className="education-root" 
        icon={faGraduationCap} 
        iconColor="#800c25"
    >
        <h1 className="school">
            <span className="binghamton">Binghamton </span>
            <span className="university">University</span>
        </h1>
        
        <div className="item">
            <span className="key">Dates: </span>
            <span className="value">February 2019 - May 2021</span>
        </div>

        <div className="item">
            <span className="key">Major: </span>
            <span className="value">Mathematics</span>
        </div>
        <div className="item">
            <span className="key">GPA: </span>
            <span className="value">3.2 / 4.0</span>
        </div>
        <div className="item">
            <span className="key">Degree: </span>
            <span className="value">Bachelor of Arts</span>
        </div>
        <div className="item">
            <span className="key">Graduation Date: </span>
            <span className="value">May 2021</span>
        </div>
        <div className="item">
            <span className="key">Extracurriculars: </span>
            <span className="value">Member of HackBU, K-Family Relations Committee Chair</span>
        </div>
        <h1 className="school">
            <span className="iona">Iona </span>
            <span className="college">College</span>
        </h1>
        <div className="item">
            <span className="key">Dates: </span>
            <span className="value">August 2017 - February 2019</span>
        </div>

        <div className="item">
            <span className="key">Major: </span>
            <span className="value">Computer Science</span>
        </div>
        <div className="item">
            <span className="key">GPA: </span>
            <span className="value">3.9 / 4.0</span>
        </div>
        <div className="item">
            <span className="key">Degree: </span>
            <span className="value">Bachelor of Science</span>
        </div>
        <div className="item">
            <span className="key">Extracurriculars: </span>
            <span className="value">Student Vice President of the Computer Science Club, Tutor for Computer Science(Python,Java,C++)</span>
        </div>
        
    </Section>
);

export default Education;