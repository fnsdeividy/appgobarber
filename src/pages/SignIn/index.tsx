import React from 'react';
import { Image, KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native';
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'
import { ScrollView } from 'react-native-gesture-handler';

const SignIn:React.FC = () => {
    const navigation = useNavigation()
    return (
        <>
        <ScrollView
       keyboardShouldPersistTaps="handled"
       enabled
        >
            <KeyboardAvoidingView
             style={{ flex:1 }}
             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
             contentContainerStyle={{flex:1}}
             enabled
            >
            <Container>
                <Image source={logoImg}/>

                <Title>Faça seu login</Title>
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
            </KeyboardAvoidingView>
        </ScrollView>
        <CreateAccountButton 
        onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccountButtonText>
                Criar conta
            </CreateAccountButtonText>
        </CreateAccountButton>
    </>
)
};

export default SignIn;