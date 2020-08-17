import React from 'react'
import {Container, Title, Subtitle} from './styles/feature'

export default function Feature({children, ...nextProps}) {
    return <Container {...nextProps}>{children}</Container>
}

Feature.Title = function FeatureTitle({children,...nextProps}) {
    return <Title {...nextProps}>{children}</Title>
}

Feature.Subtitle = function FeatureSubtitle({children, ...nextProps}) {
    return <Subtitle {...nextProps}>{children}</Subtitle>
}