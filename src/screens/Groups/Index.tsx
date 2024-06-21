import { Container } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header/Index';
import { Highlight } from '@components/Highlight/Index';
import { GroupCard } from '@components/GroupCard/Index';
import { ListEmpty } from '@components/ListEmpty/Index';
import { Button } from '@components/Button/Index';

export function Groups() {
  const [groups, setGroup] = useState<string[]>([]);
  const navigation = useNavigation();
  
  function handleNewGroup(){
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header  />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList 
        data={groups}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message='Cadastre uma turma' />
        )} />
        
      <Button title="Criar nova turma"
        onPress={handleNewGroup}/>
    </Container>
  );
}

