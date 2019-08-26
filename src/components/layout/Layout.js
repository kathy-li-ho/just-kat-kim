import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import SEO from '../seo/SEO';
import Footer from '../footer/Footer';
import './Layout.css';

const Layout = ({pageTitle, page, children}) => (
    <>
        <Header />
        <SEO title={pageTitle} />
        <main>{children}</main>
        <Footer page={page} />
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    page: PropTypes.string.isRequired,
    pageTitle: PropTypes.string,
};

export default Layout;
