import React from 'react';
import Head from 'next/head';

const Header = () => (
    <Head>
        <title>Daniel Sayegh</title>

        
        {/* Roboto */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:200,400" rel="stylesheet" />
        {/* Roboto Mono */}
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400" rel="stylesheet" />
        {/* Noto Sans */}
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans:200,400" rel="stylesheet" />

        {/* Standard Meta Tags */}
        <meta name="description" content="Hi, I'm Daniel. Here's a little bit about me." />
        <meta name="keywords" content="Daniel, Sayegh, Developer, Binghamton, Data Science, Face Recognition, Linear Regression, Deep Learning" />
        <meta name="author" content="Daniel Sayegh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Daniel Sayegh" />
        <meta property="og:description" content="Hi, I'm Daniel. Here's a little bit about me." />
        <meta property="og:url" content="https://danielsayegh.com" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://danielsayegh.com/" />
        <meta property="twitter:title" content="Daniel Sayegh" />
        <meta property="twitter:description" content="Hi, I'm Daniel. Here's a little bit about me." />
    </Head>
)

export default Header;