import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faServer } from '@fortawesome/free-solid-svg-icons';

const Projects = () => (
    <div className="projects-root">
        <div className="title">Projects</div>
        <div className="projects-holder">
            
            <Project 
                imgSrc="/NBA All-Star Classifier.png"
                name="NBA All-Star Player Recognition"
                description="
                In this project, I used haar cascade to create an accurate face classifier. Also used data scraping and data cleaning methods to obtain an up-to-date dataset along with a browser interface to achieve an efficient, useful and visually appealing project.
                "
                skills={["Python","Machine Learning", "HTML","CSS","Javascript","AWS"]}
                skillsColor="#ff2424"
                demo="http://ec2-3-16-136-202.us-east-2.compute.amazonaws.com/"
                sourceCode="https://github.com/DanielSayegh/NBAFaceRecognition"
            />

            <Project 
                imgSrc="/nba2k20.ico"
                name="Deep Analysis of Dataset within NBA 2k20"
                description="
                Explored and Analyzed multiple features within a given dataset based off each player in the NBA2k20 video game. Examined collinearity and normality.
                "
                skills={["Python","Stastical Analysis","Data Visualization"]}
                skillsColor="#78b5ff"
                sourceCode="https://github.com/DanielSayegh/A-Deep-Analysis-of-NBA2k20-Dataset"
            />

            <Project 
                imgSrc="/detect sentiment.png"
                name="Detect Sentiment of Youtube Titles"
                description="
                Using Youtube API to gather data on a specific channel, created a model to determine the sentiment of a given Youtube title. 
                Also explored data on whether or not there exists a correlation between the sentiment of a Youtube title and the statistics of that Youtube video.
                "
                skills={["API", "Python","Machine Learning"]}
                skillsColor="#19afff"
                sourceCode="https://github.com/DanielSayegh/API-for-Youtube-Video-Sentiment"
            />


        </div>
    </div>
);

const Project = ({ 
    imgSrc, 
    name,
    description,
    skills,
    skillsColor,
    sourceCode,
    demo
}) => {
    let [sourceHover, setSourceHover] = useState(false);
    let [demoHover, setDemoHover] = useState(false);
    return (
    <div 
        className="project" 
        style={{ borderColor: skillsColor }}
    >
        <div className="img-container">
            <img src={imgSrc} height="100%" />
        </div>
        <div className="text">
            <div className="project-name">{name}</div>
            <div className="project-description">{description}</div>
            <div className="skills-used">
                {skills.map(skill => 
                    <SkillItem 
                        key={skill} 
                        children={skill} 
                        color={skillsColor || "#3bb2e6"}
                    />
                )}
            </div>
            <div className="links">
                {sourceCode && 
                    <a 
                        className="link source" 
                        href={sourceCode} 
                        rel="noreferrer"
                        target="_blank"
                        style={{ borderColor: skillsColor || '#000000' }}
                        onMouseEnter={() => setSourceHover(true)}
                        onMouseLeave={() => setSourceHover(false)}
                    >
                        <FontAwesomeIcon icon={faCodeBranch} size="2x" />
                        <div className={`explain-text ${!sourceHover ? 'hide' : ''}`}>Source</div>
                    </a>
                }
                {demo && 
                    <a 
                        className="link demo" 
                        href={demo} 
                        rel="noreferrer"
                        target="_blank"
                        style={{ borderColor: skillsColor || '#000000' }}
                        onMouseEnter={() => setDemoHover(true)}
                        onMouseLeave={() => setDemoHover(false)}
                    >
                        <FontAwesomeIcon icon={faServer} size="2x" />
                        <div className={`explain-text ${!demoHover ? 'hide' : ''}`}>Demo</div>
                    </a>
                }
            </div>
        </div>
    </div>);
};

Project.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    skillsColor: PropTypes.string,
    sourceCode: PropTypes.string,
    demo: PropTypes.string
}

export default Projects;