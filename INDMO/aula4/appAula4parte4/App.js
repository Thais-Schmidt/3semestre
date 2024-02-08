import { NavigationContainer  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";}
import Routes from './src/routes/index';

const Tab = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
