import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import Menu from '~/components/Menu';

import Tabs from '~/components/Tabs';

import { Container, Content, Title, Card, CardContent, CardFooter, CardHeader, Description, Annotation } from './styles';
export default function Main() {
  return(
    <Container>
      <Header/>
      
      <Content>

      <Menu/>
     
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color ="#666"/>
            <Icon name="visibility-off" size={28} color ="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 273.843,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transfência de Fernanda no valor de R$ 6,89.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs/>
    </Container>
  );
}