import React, { useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native';
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import logoImg from '../../assets/logo.png'
import { ScrollView } from 'react-native-gesture-handler';



const SignIn:React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation()
    const handleSignIn = useCallback((data:object) => {
        return console.log(data)
    }, [])
    return (
        <>
        <ScrollView
       keyboardShouldPersistTaps="handled"
       enabled
        >
            <KeyboardAvoidingView
             
             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
             contentContainerStyle={{flex:1}}
             enabled
            >
            <Container>
                <Image source={logoImg}/>

                <Title>Faça seu login</Title>
                <Form 

                
                ref={formRef}
                onSubmit={handleSignIn}>
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
                 <Button 
                onPress={() => formRef.current?.submitForm()}>Entrar</Button>
                
                </Form>
                
                
          
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