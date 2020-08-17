import React from 'react'
import {Header} from '../components'
import * as ROUTES from '../constants/routes'

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Nav>
                <Header.Logo src="/images/misc/logo.svg" alt="Netflix" />
                <Header.Button to={ROUTES.LOGIN}>Sign In</Header.Button>
            </Header.Nav>
            {children}
        </Header>
    )
}