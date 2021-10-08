import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
    isFocused:boolean;

}

interface IconProps {
    isFilled:boolean
}

export const Container = styled.View<ContainerProps> `
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #232129;
    border-radius: 10px;
    border-width: 2px;
    border-color: #232129;
    margin-bottom: 8px;
    flex-direction:row ;
    align-items: center;

    ${props => props.isFocused && css `
        border-color: #ff9000;
    `}

`; 

export const TextInput = styled.TextInput `
    flex: 1;
    color: #FFF;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
    margin-left: 15px;

`;

export const Icon = styled(FeatherIcon)<IconProps> `
    

   
`;