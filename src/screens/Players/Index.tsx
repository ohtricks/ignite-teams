import { Header } from '@components/Header/Index';
import { Container, Form, Content } from './styles';
import { Highlight } from '@components/Highlight/Index';
import { Button } from '@components/Button/Index';
import { Input } from '@components/Input/Index';
import { ButtonIcon } from '@components/ButtonIcon/Index';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
          title="Nome da turma" 
          subtitle="adicione a galera e separe os times" />

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false} />

          <ButtonIcon icon="add" />  
      </Form>    
    </Container>
  );
}

