import React  from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, KeyboardAvoidingView, Platform, _ScrollView, View }  from 'react-native';
import { 
    Container, 
    Title,
    BackToLogon,
    BackToLogonText 
} from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const SignUp:React.FC = () => {

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

                   
                            <Title>Crie seu cadastro</Title>
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
                        onPress={() => {} }>
                            Cadastrar
                        </Button>
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