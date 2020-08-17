import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #FFF;
    padding: 100px 0 0 0;
`

export const Title = styled.h1`
    font-size: 50px;
    max-width: 640px;
    margin: 0 auto;
    
    @meida (max-width: 600px) {
        font-size: 35px;
    }
`

export const Subtitle = styled.h2`
     font-size: 26px;
     font-weight: normal;
     margin: 16px auto;
     
     @media (max-width: 600px) {
        font-size: 18px;
     }
`