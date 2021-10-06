import React from 'react';
import { Image } from 'react-native'
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

const SignIn:React.FC = () => {

    return (
        <>
        <Container>
            <Image source={logoImg}/>

            <Title>Faça seu logon</Title>
            <Input 
            name="email"
            icon= "mail"
            placeholder="E-mail"
            />

            <Input 
            name="password"
            icon = "lock"
            placeholder="Senha"
            />
            <Button onPress={() => {console.log('foi')}}>Entrar</Button>

            <ForgotPassword onPress={() => {}}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>

            
        </Container>
        <CreateAccountButton 
        onPress={() => {console.log('deu bom')}}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccountButtonText>
                Criar conta
            </CreateAccountButtonText>
        </CreateAccountButton>
    </>
)
};

export default SignIn;