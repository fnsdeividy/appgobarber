import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, KeyboardAvoidingView, Platform, _ScrollView, View }  from 'react-native';
import { 
    Container, 
    Title,
    BackToLogon,
    BackToLogonText 
} from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const SignUp:React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

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

                        <Title>Crie seu cadastro</Title>
                        <Form
                        onSubmit={(data) => {console.log(data)}}
                        ref={formRef}
                        >
                            <Input 
                            name="user"
                            icon="user"
                            placeholder="Nome"/>
                            <Input 
                            name="mail"
                            icon="mail"
                            placeholder="E-mail"/>
                            <Input 
                            name="password"
                            icon="lock"
                            placeholder="Senha"/>

                            <Button
                            onPress={() => formRef.current?.submitForm() }>
                                Cadastrar
                            </Button>
                        </Form>
                    </Container>
                </KeyboardAvoidingView>
            </ScrollView>
            
            <BackToLogon
            onPress={() => navigation.goBack() }
            >
                <Icon name="arrow-left" size={20} color="#f4ede8"/>
                <BackToLogonText>
                Voltar para login
                </BackToLogonText>
            </BackToLogon>
        </>
    );
};

export default SignUp;