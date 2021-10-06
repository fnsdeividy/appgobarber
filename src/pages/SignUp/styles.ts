import styled from 'styled-components/native';


export const Container = styled.View `
    flex: 1;
    align-items: center;
    justify-content: center;
    padding:  0 30px 150px  ;
    margin-top: 50px;
    
    
`; 

export const Title = styled.Text `
    font-size: 25px;
    font-family: "RobotoSlab-Medium";
    color: #f4ede8;
    margin: 64px 0 24px;

`;

export const BackToLogon = styled.TouchableOpacity`
    right: 0;
    left: 0;
    flex-direction: row;
    border-top-width:1px ;
    border-color: #232129;
    padding: 16px 0 16px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const BackToLogonText = styled.Text`
    font-size: 18px;
    font-family: 'RobotSlab-Regular';
    color:#f4ede8;
    margin-left: 15px;
`;