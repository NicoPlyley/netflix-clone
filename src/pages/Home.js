import React from 'react'
import {Feature, OptForm} from '../components'
import {JumbotronContainer} from '../containers/Jumbotron'
import {FooterContainer} from '../containers/Footer'
import {FaqsContainer} from '../containers/Faqs'
import {HeaderContainer} from '../containers/Header'

export default function Home(){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
                </Feature>
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try 30 Days Free</OptForm.Button>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}