import React, { useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, Alert } from 'react-native'
import { Platform, TextInput } from 'react-native';
import { 
    Container, 
    Title, 
    ForgotPassword, 
    ForgotPasswordText, 
    CreateAccountButton, 
    CreateAccountButtonText} from './styles';
import * as Yup from 'yup';
import  Icon  from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors'
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import logoImg from '../../assets/logo.png';
import { ScrollView } from 'react-native-gesture-handler';




interface SignInFormData {
    email:string;
    password:string

}


const SignIn:React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null)
    const navigation = useNavigation()
    const handleSignIn= useCallback( async (data:SignInFormData)=> {
        try {

           formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                
                email: Yup.string().required('E-mail obrigatório').email('Digite um E-mail válido'),
                
                password: Yup.string().required('Senha Obrigatória'), 
            });
            
            
            await schema.validate(data, {
                 abortEarly:false,
            })

            //await signIn({
            //    email:data.email,
            //    password:data.password
           // })
           
            //history.push('/dashboard');

        } catch (err:any)  {
           if(err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            
            formRef.current?.setErrors(errors)
           }
           
           

           /*Alert.alert(
               'Erro na autenticação',
               'Ocorreu um erro na autenticação, cheque as credenciais'
           )*/

          
        }
    }, []);
    
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
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType="email-address"
                name="email"
                icon= "mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                
                />

                <Input 
                ref={passwordInputRef}
                name="password"
                icon = "lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
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