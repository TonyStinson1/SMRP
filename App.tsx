// App.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/ionicons';
import HomeScreen from './src/screens/Home/HomeScreen';
import LogScreen from './src/screens/Logs/LogScreen';

const Tab = createBottomTabNavigator();

// Entry Screen
function EntryScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Entry Screen</Text>
    </View>
  );
}

// Logs Screen
function LogsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Logs Screen</Text>
    </View>
  );
}

// Main App Navigation
export default function App() {
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Entry" component={EntryScreen} />
        <Tab.Screen name="Logs" component={LogScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
