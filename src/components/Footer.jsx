import React from 'react';

const sourceRepoLink = "https://github.com/danielsayegh/Portfolio";

const Footer = () => (
    <div className="footer-root">
        <span>
            Daniel Sayegh | 
            <a 
                href={sourceRepoLink}
                rel="noreferrer"
                target="_blank"
            >{' Source'}
            </a>
        </span>
    </div>
);

export default Footer;