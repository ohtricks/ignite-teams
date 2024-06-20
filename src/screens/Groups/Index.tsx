import { Header } from '@components/Header/Index';
import { Container } from './styles';
import { Highlight } from '@components/Highlight/Index';
import { GroupCard } from '@components/GroupCard/Index';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty/Index';
import { Button } from '@components/Button/Index';

export function Groups() {
  const [groups, setGroup] = useState<string[]>([]);
  
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
        
      <Button title="Criar nova turma"/>
    </Container>
  );
}

