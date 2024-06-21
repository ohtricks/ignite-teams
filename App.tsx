import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme/Index';
import { Loading } from '@components/Loading/Index';

import { Routes } from './src/routes/Index';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent" />
      { fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}