import React from 'react'
import PropTypes, {arrayOf, shape} from 'prop-types'
import {Link} from 'gatsby'

import './Header.css'

const Header = ({pages}) => {
    const links = []
    const favoritesPath = '/favorites/'

    for (var page of pages) {
        const {path} = page

        if (path === '/') {
            links.unshift({
                href: path,
                title: 'home',
            })
        } else if (path !== favoritesPath) {
            links.push({
                href: path,
                title: path.substring(1, path.length - 1),
            })
        }
    }

    links.push({
        href: favoritesPath,
        title: "kat's bag",
    })

    return (
        <header className="header">
            <div className="meow">meow.</div>
            <nav className="nav">
                {links.map(link => {
                    const {title, href} = link
                    return (
                        link && (
                            <Link
                                key={title}
                                className="link"
                                activeClassName="active"
                                to={href}
                            >
                                {title}
                            </Link>
                        )
                    )
                })}
            </nav>
        </header>
    )
}

Header.propTypes = {
    pages: arrayOf(
        shape({
            path: PropTypes.string,
        })
    ),
}

export default Header
