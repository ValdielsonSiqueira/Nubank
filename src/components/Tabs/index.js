import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs(){
    return(
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={20} color="#FFF"/>
                    <TabText> Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={20} color="#FFF"/>
                    <TabText> Comprar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={20} color="#FFF"/>
                    <TabText> Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={20} color="#FFF"/>
                    <TabText> Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={20} color="#FFF"/>
                    <TabText> Bloquear Cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}