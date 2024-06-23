import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect, useRoute } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';

import { Input } from '@components/Input/Index';
import { Button } from '@components/Button/Index';
import { Filter } from '@components/Filter/Index';
import { Header } from '@components/Header/Index';
import { Highlight } from '@components/Highlight/Index';
import { ListEmpty } from '@components/ListEmpty/Index';
import { ButtonIcon } from '@components/ButtonIcon/Index';
import { PlayerCard } from '@components/PlayerCard/Index';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const {group} = route.params as RouteParams;


  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar')
    }

    const newPlayer = {
      name: newPlayerName,
      team: team
    };

    try {
      await playerAddByGroup(newPlayer, group);
      setNewPlayerName('');
      await fetchPlayersByTeam();
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message);
      }else{
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possivel adicionar');

      }
    }
  }

  async function fetchPlayersByTeam(){
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas do time selecionado');
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
          title={group} 
          subtitle="adicione a galera e separe os times" />

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName} />

          <ButtonIcon icon="add"
            onPress={handleAddPlayer} />  
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
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item, index }) => (
          <PlayerCard 
            name={item.name}
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

