/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'

import Header from './header/Header'
import Footer from './footer/Footer'
import './layout.css'

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query pages {
      allSitePage(filter: {componentPath: {regex: "/pages/"}}) {
        nodes {
          path
        }
      }
    }
    
    `)

    return (
        <>
            <Header pages={data.allSitePage.nodes} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
