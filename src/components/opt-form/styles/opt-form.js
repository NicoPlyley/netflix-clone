import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
    flex-direction: row;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 70px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    background: #E50914;
    color: #FFF;
    border: 0;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    cursor: pointer;
    
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 1000px) {
          width: 16px;
        }
    }
    
    &:hover {
        background: #F40612;
    }
    
    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
    
`

export const Text = styled.p`
    font-size: 19px;
    color: #FFF;
    text-align: center;
    width: 100%;
`