import React from 'react'
import {JumbotronContainer} from '../containers/Jumbotron'
import {FooterContainer} from '../containers/Footer'
import {FaqsContainer} from '../containers/Faqs'

export default function Home(){
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}