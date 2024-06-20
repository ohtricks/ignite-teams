import { Header } from '@components/Header/Index';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight/Index';
import { Button } from '@components/Button/Index';
import { Input } from '@components/Input/Index';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Turmas" 
          subtitle="Jogue com a sua turma" />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{marginTop: 20}} />
      </Content>        
    </Container>
  );
}

