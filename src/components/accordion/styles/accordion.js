import styled from 'styled-components'

export const Container = styled.section`
    border-bottom: 8px solid #222;
    width: 100%;
`

export const Inner = styled.div`
    display: flex;
    padding: 70px 0;
    width: 90%;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`

export const Item = styled.div`
    color: #FFF;
    margin-bottom: 10px;
    
    &:first-of-type {
      margin-top: 3em;
    }
`

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: #FFF;
    text-align: center;
    
    @media (max-width: 600px) {
        font-size: 35px;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 25px 30px;
    user-select: none;
    align-items: center;
    width: 100%;
    
    img {
       filter: brightness(0) invert(1);
       width: 24px;
       
       @media (max-width: 600px) {
           width: 16px;
       }
    }
    
    @media (max-width: 600px) {
        font-size: 16px;
    }
`

export const Body = styled.div`
    font-size: 25px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 25px 30px;
    user-select: none;
    align-items: center;
    transition: 0.25s;
    width: 100%;
    
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`