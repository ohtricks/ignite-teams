import { Header } from '@components/Header/Index';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight/Index';
import { Button } from '@components/Button/Index';
import { Input } from '@components/Input/Index';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleNew(){
    try{
      if(group.trim().length === 0){
        return;
      }

      await groupCreate(group);
      navigation.navigate('players', {group: group});
    }catch(error){
      if(error instanceof AppError){
        Alert.alert('Nova Turma', error.message);
      }else{
        Alert.alert('Nova Turma', 'Não foi possivel criar uma nova turma');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Turmas" 
          subtitle="Jogue com a sua turma" />
        <Input placeholder="Nome da turma"
          onChangeText={setGroup} />
        <Button title="Criar" 
          style={{marginTop: 20}}
          onPress={handleNew} />
      </Content>        
    </Container>
  );
}

