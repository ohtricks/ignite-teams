import { Container, LoadIndicator } from './styles';
import { ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <Container>
        <LoadIndicator />
    </Container>
  );
}

