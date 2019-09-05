import React from 'react';
import PropTypes from 'prop-types';

import Admin from '../admin/Admin';
import Header from '../header/Header';
import SEO from '../seo/SEO';
import Footer from '../footer/Footer';
import './Layout.css';

const Layout = ({pageTitle, page, children}) => (
    <>
        <Header />
        <Admin />
        <SEO title={pageTitle} />
        <main className={page}>{children}</main>
        <Footer page={page} />
    </>
);

Layout.propTypes = {
    children: PropTypes.node,
    page: PropTypes.string.isRequired,
    pageTitle: PropTypes.string,
};

export default Layout;
