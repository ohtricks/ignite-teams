import { Container, Title, FilterStyleProps } from './styles';
import { TouchableOpacityProps } from "react-native";

type Props = FilterStyleProps & TouchableOpacityProps & {
  title: string;
};

export function Filter({title, isActive = false, ...rest}: Props) {
  return ( 
    <Container {...rest} 
      isActive={isActive}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}

