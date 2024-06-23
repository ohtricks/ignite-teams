import { PlayerStorageDTO } from './PlayerStorageDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/config';
import { AppError } from '@utils/AppError';
import { playerGetByGroup } from './playerGetByGroup';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storagePlayers = await playerGetByGroup(group);
        const playerAlreadyExists = (await storagePlayers).filter(player => player.name === newPlayer.name);

        if(playerAlreadyExists.length > 0){
            throw new AppError(`Jogador "${newPlayer.name}" já existe em um time.`);
        }

        const storage = JSON.stringify([...storagePlayers, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
    } catch (error) {
        throw error;
    }
}