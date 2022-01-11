import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const linkedinLink = "https://www.linkedin.com/in/daniel-sayegh";
const githubLink = "https://github.com/DanielSayegh";

const Nav = () => (
    <nav className="nav-root">
        <div className="nav-name">Daniel Sayegh</div>
        <div className="nav-links">
            {/* <span>Contact Me</span> */}
            <a className="nav-link" href={linkedinLink} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a className="nav-link" href={githubLink} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
            </a>
        </div>
    </nav>
)

export default Nav;