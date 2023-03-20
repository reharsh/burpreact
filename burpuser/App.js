import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
          <RootNavigator/>
          <StatusBar style={"auto"}/>
    </NavigationContainer>
  );
}
