import { FlatList } from 'react-native';
import { useState } from 'react';
import { Header } from '@components/Header/Index';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Highlight } from '@components/Highlight/Index';
import { Input } from '@components/Input/Index';
import { ButtonIcon } from '@components/ButtonIcon/Index';
import { Filter } from '@components/Filter/Index';
import { PlayerCard } from '@components/PlayerCard/Index';
import { ListEmpty } from '@components/ListEmpty/Index';
import { Button } from '@components/Button/Index';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([
    
  ]);

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

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
      <FlatList 
        data={players}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
            <ListEmpty message='Não a pessoas neste time' />
          )} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && { flex: 1}]}
      />

      <Button 
        title='Remover Turma'
        type="SECONDARY" />
    </Container>
  );
}

