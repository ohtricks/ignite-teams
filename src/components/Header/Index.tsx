import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container, Logo } from './styles';
import LogoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props) {
  const navigation = useNavigation();

  function handleGoGroups(){
    navigation.navigate('groups');
  }

  return (
    <Container style={{ justifyContent: showBackButton ? 'space-between' : 'center' }}>
        {showBackButton && 
          <BackButton onPress={handleGoGroups}>
            <BackIcon />
          </BackButton>}
        <Logo source={LogoImg} />
    </Container>
    // <Container>
    //   <ContainerIcon style={{ justifyContent: showBackButton ? 'space-between' : 'center' }}>
    //     {showBackButton && <BackButton><BackIcon /></BackButton>}
    //     <Logo source={LogoImg} />
    //   </ContainerIcon>
    // </Container>
  );
}

