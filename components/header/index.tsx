import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {HeaderWrapper, MenuButton, Nav, NavLabel, Stamp} from './styles';
import {MenuIcon} from '../../assets/svgs';
import {GlobalHeader} from '../../.tina/__generated__/types';

interface IHeader {
    data: GlobalHeader;
}

export const Header = ({data}: IHeader) => {
    if (!data) {
        return null;
    }

    const router = useRouter();
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <HeaderWrapper isOpaque={toggleMenu}>
            <MenuButton onClick={() => setToggleMenu(!toggleMenu)}>
                <MenuIcon />
            </MenuButton>
            <Link href="/" passHref>
                <Stamp>meow.</Stamp>
            </Link>
            <Nav isOpen={toggleMenu}>
                {data.nav &&
                    data.nav.map((item, i) => {
                        const route =
                            router.asPath === '/'
                                ? 'home'
                                : router.asPath || 'home';
                        const href = item.href || 'home';
                        const activeItem = route.includes(href);
                        return (
                            <Link
                                href={`/${item.href || 'home'}`}
                                key={`${item.label}-${i}`}
                            >
                                <NavLabel isActive={activeItem}>
                                    {item.label}
                                </NavLabel>
                            </Link>
                        );
                    })}
            </Nav>
        </HeaderWrapper>
    );
};
