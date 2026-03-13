import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Interface } from './src/view/Interface';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Interface />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}