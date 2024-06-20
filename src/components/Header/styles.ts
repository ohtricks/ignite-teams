import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

// export const Container = styled.View`
//     flex: 1;
//     align-items: center;
//     justify-content: flex-start;
//     padding: 20px;
// `;

// export const ContainerIcon = styled.View`
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
// `;


export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
    width: 50px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE,
    size: 30
}))``;