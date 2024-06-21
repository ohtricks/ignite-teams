import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};

    padding: 24px;
`;

export const Form = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};

    flex-direction: row;
    justify-content: center;
    
    border-radius: 6px;
`;


export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    color: #FFF;
`;
