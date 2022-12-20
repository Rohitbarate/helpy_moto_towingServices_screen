import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import TowingService from './components/screens/TowingService'
import DriverInfo from './components/screens/DriverInfo';
import Icon from 'react-native-vector-icons/Entypo'
import First from './components/screens/First';
import Second from './components/screens/Second';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
      initialRouteName="!Stopable's"
       screenOptions={{ headerTitleAlign: "center" ,
       headerTitleStyle:{fontSize:16,fontWeight:'600'}}}
      >
        <Stack.Screen name="!Stopable's" component={First} options={
          {
            headerTitleStyle:{
              fontSize:26,
              fontWeight:'800'
            }
          }
        } />
        <Stack.Screen name="veh type" component={Second} options={
          {
           headerTitle:'Vehicle details',
           headerTitleStyle:{
            fontSize:26,
            fontWeight:'800'
          }
          }
        } />
        <Stack.Screen name='Towing Service' component={TowingService} options={{headerRight: () => (
          <TouchableOpacity>
            <Icon name="dots-three-vertical" size={24} color="#5D5FEF"/>
          </TouchableOpacity>
          ),}}/>
        <Stack.Screen name='Driver' component={DriverInfo} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
