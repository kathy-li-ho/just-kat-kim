import React, {useState} from 'react';
import cx from 'classnames';
import {useStaticQuery, graphql, Link} from 'gatsby';

import './Header.css';

const favoritesPath = '/favorites/';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const pages = useStaticQuery(graphql`
        query {
            allSitePage(filter: {componentPath: {regex: "/pages/"}}) {
                edges {
                    node {
                        path
                    }
                }
            }
        }
    `, []).allSitePage.edges;
    
    const links = [];

    if (!links.length) {
        pages.forEach(page => {
            const {
                node: {path},
            } = page;
            if (path === '/') {
                links.unshift({
                    href: path,
                    title: 'home',
                });
            } else if (path !== favoritesPath) {
                links.push({
                    href: path,
                    title: path.slice(1, -1),
                });
            }
        });
        links.push({
            href: favoritesPath,
            title: "kat's bag",
        });
    };

    return (
        <header
            className="header"
        >
            <button
                className="menuToggle"
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <svg height="24" width="24">
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
            </button>
            <div className="meow">meow.</div>
            <nav className={cx('nav', {openNav: toggleMenu})}>
                {links.map(link => {
                    const {title, href} = link;
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
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
