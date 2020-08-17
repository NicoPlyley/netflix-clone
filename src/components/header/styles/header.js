import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    padding: 0 0 200px 0;
    flex-direction: column;
    border-bottom: 8px solid #222;
    background: url(${({src}) => (src ? `/images/misc/${src}.jpg` : '/images/misc/home-bg.jpg')}) top left / cover no-repeat;
    
    @media (max-width: 1100px) {
        ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && 'background: none'}
    }
`

export const Nav = styled.nav`
    display: flex;
    margin: 0 56px;
    padding: 18px 0;
    justify-content: space-between;
    
    a {
        display: flex;
    }
    
    @media (max-width: 1000px) {
        margin: 0 30px;
    }
    
`

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
`

export const Link = styled.a`
        color: #FFF;
        text-decoration: none;
        margin-right: 30px;
        font-weight: ${({active}) => (active ? '700' : 'normal')};
        
        &:hover {
            font-weight: bold;
        }
        
        &:last-of-type {
            margin-right: 0;
        }
`

export const Button = styled(RouterLink)`
    display: block;
    background: #E50914;
    width: 84px;
    height: fit-content;
    color: #FFF;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        background: #F40612;
    }
    
`