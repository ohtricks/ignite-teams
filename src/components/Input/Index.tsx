import { Container } from './styles';
import {TextInputAndroidProps} from 'react-native';
import {useTheme} from "styled-components/native";

export function Input({...rest}: TextInputAndroidProps) {
  const {COLORS} = useTheme();
  return ( 
    <Container {...rest}
      placeholderTextColor={COLORS.GRAY_300} /> 
  );
}

