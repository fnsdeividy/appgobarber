import React, { useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Alert,
    Image, 
    KeyboardAvoidingView, 
    Platform,
    TextInput,

}  from 'react-native';
import * as Yup from 'yup'
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
import Input from '../../components/Input'
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { ScrollView } from 'react-native-gesture-handler';


interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp:React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const inputEmailRef = useRef<TextInput>(null)
    const inputPasswordRef = useRef<TextInput>(null)
    const navigation = useNavigation();
    const handleSignUp= useCallback( async (data:SignUpFormData)=> {
        try {

           formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório') ,

                email: Yup.string().required('E-mail obrigatório').email('Digite um E-mail válido'),
                
                password: Yup.string().required().min(6, 'No minimo 6 digitos'), 
            });
            
            
            await schema.validate(data, {
                 abortEarly:false,
            })

            //await api.post('/users', data);

            //history.push('/')
           
          
        } catch (err:any)  {
           
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                console.log(err)
                formRef.current?.setErrors(errors)
               }
               
               /* Alert.alert(
                
                    'Erro no cadastro',
                    'Ocorreu um erro no cadastro. Tente novamente'
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

                style={{ flex:1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                contentContainerStyle={{flex:1}}
                enabled
                >
                   <Container>
                        <Image source={logoImg}/>

                        <Title>Crie seu cadastro</Title>
                        <Form
                        onSubmit={handleSignUp}
                        ref={formRef}
                        >
                            <Input 
                            autoCapitalize="words"
                            name="name"
                            icon="user"
                            placeholder="Nome"
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                inputEmailRef.current?.focus()
                            }}
                            />
                            <Input 
                            ref={inputEmailRef}
                            autoCapitalize="none"
                            name="email"
                            icon="mail"
                            placeholder="E-mail"
                            returnKeyType="next"  
                            onSubmitEditing={() => {
                                inputPasswordRef.current?.focus()
                            }}
                            />
                            <Input
                            ref={inputPasswordRef}
                            secureTextEntry 
                            name="password"
                            icon="lock"
                            placeholder="Senha"
                            returnKeyType="send"
                            onSubmitEditing={() => formRef.current?.submitForm()}
                            />

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