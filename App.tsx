import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme/Index';

import { Groups } from '@screens/Groups/Index';
import { NewGroup } from '@screens/NewGroup/Index';
import { Players } from '@screens/Players/Index';
import { Loading } from '@components/Loading/Index';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent" />
      { fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}