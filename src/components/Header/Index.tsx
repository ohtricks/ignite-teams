import { BackButton, BackIcon, Container, ContainerIcon, Logo } from './styles';
import LogoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props) {
  return (
    <Container style={{ justifyContent: showBackButton ? 'space-between' : 'center' }}>
        {showBackButton && <BackButton><BackIcon /></BackButton>}
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

