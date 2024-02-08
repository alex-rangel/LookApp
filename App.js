import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

import Rotas from './src/routes'


export default function App() {
  return (
    
      <SafeAreaView style={{flexDirection:"row", height:"100%"}}>
        <Rotas/>
      </SafeAreaView>
    
  );
}

