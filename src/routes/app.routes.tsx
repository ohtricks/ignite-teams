import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Groups } from '@screens/Groups/Index';
import { NewGroup } from '@screens/NewGroup/Index';
import { Players } from '@screens/Players/Index';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator 
            initialRouteName='groups'
            screenOptions={{headerShown: false}}>
            <Screen name="groups" component={Groups} />
            <Screen name="new" component={NewGroup} />
            <Screen name="players" component={Players} />
        </Navigator>
    );
}