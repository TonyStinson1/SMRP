import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home/HomeScreen'
import FittingsHDPE from '../screens/Home/FittingsHDPE'
import { PostAuthNavigationParamList } from './types'
import AddNewItemScreen from '../screens/Home/AddNewItemScreen'
import ProductDetail from '../screens/Home/ProductDetail'

const Stack = createNativeStackNavigator<PostAuthNavigationParamList>()

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='FittingsHDPE' component={FittingsHDPE} options={{ headerShown: false }} />
            <Stack.Screen name='AddNewItemScreen' component={AddNewItemScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}