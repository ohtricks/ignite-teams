import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/config';
import { groupGetAll } from './groupGetAll';
import { AppError } from '@utils/AppError';

export async function groupCreate(newGroup: string){
    try{
        const storageGroups = await groupGetAll();
        const groupAlreadyExists = storageGroups.includes(newGroup);

        if(groupAlreadyExists){
            throw new AppError('Turma já existe!');
        }else if(newGroup.trim().length === 0){
            throw new AppError('Informe o nome da turma.');
        }

        const storage = JSON.stringify([...storageGroups, newGroup]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch(error){
        throw error;
    }
}