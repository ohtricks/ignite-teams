import { TouchableOpacity } from "react-native";
import {styled, css} from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';


export const Container = styled(TouchableOpacity)`
    min-height: 56px;
    max-height: 56px;
    
    justify-content: center;
    align-items: center;
    margin-right: 16px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;

