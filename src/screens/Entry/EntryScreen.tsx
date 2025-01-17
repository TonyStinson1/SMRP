// App.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Entry Screen
function EntryScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Entry Screen</Text>
        </View>
    );
}

export default EntryScreen;

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
