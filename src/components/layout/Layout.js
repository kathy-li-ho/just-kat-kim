import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.css';

const Layout = ({children}) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
