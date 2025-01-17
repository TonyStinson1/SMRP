import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/ionicons';
import EntryScreen from '../screens/Entry/EntryScreen';
import LogScreen from '../screens/Logs/LogScreen';
import { HomeStack } from './HomeStack';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Entry') {
                            iconName = 'create-outline';
                        } else if (route.name === 'Logs') {
                            iconName = 'list-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
                <Tab.Screen name="Entry" component={EntryScreen} />
                <Tab.Screen name="Logs" component={LogScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}