import React from 'react';


import {Container, Code} from './styles';

import QRCode from 'react-native-qrcode';

export default function Menu(){
    return(
        <Container>
            <Code>
                <QRCode
                value="http://google.com"
                size={80}
                bgColor="#FFF"
                fgColor="#8b10ae" 
                />
            </Code>
        </Container>
    );

}