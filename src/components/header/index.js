import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Nav, Container, Logo, Button} from './styles/header'

export default function Header({bg=true, children, ...restProps}) {
    return bg ? <Container {...restProps}>{children}</Container> : {children}
}

Header.Nav = function HeaderNav({children, ...restProps}) {
    return <Nav {...restProps}>{children}</Nav>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return  (
        <RouterLink to={to}>
            <Logo {...restProps} />
        </RouterLink>
    )
}

Header.Button = function HeaderButton({children, ...nextProps}) {
    return <Button {...nextProps}>{children}</Button>
}

// Header.Title = function HeaderTitle({children, ...nextProps}) {
//
// }