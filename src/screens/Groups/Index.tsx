import { Container } from './styles';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Header } from '@components/Header/Index';
import { Highlight } from '@components/Highlight/Index';
import { GroupCard } from '@components/GroupCard/Index';
import { ListEmpty } from '@components/ListEmpty/Index';
import { Button } from '@components/Button/Index';
import { groupGetAll } from '@storage/group/groupGetAll';
import { Loading } from '@components/Loading/Index';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroup] = useState<string[]>([]);
  const navigation = useNavigation();
  
  async function fetchGroups(){
    try {
      setIsLoading(true);

      const data = await groupGetAll();

      setGroup(data);

    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possivel carregar as turmas');
    }finally{
      setIsLoading(false);
    }
  }

  function handleNewGroup(){
    navigation.navigate('new');
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group: group});
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  },[]));

  return (
    <Container>
      <Header  />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      {isLoading ? <Loading /> :
        <FlatList 
          data={groups}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <GroupCard 
              title={item}
              onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => (
            <ListEmpty message='Cadastre uma turma' />
          )} />
      }
      <Button title="Criar nova turma"
        onPress={handleNewGroup}/>
    </Container>
  );
}

