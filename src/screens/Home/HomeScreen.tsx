import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  // Sample data for the FlatList
  const data = [
    { id: '1', name: 'FITTINGS HDPE' },
    { id: '2', name: 'FITTINGS PPRC' },
    { id: '3', name: 'OIL SEALS' },
    { id: '4', name: 'PIPE HDPE' },
    { id: '5', name: 'PU SEAL' },
    { id: '6', name: 'WATER REFRACTOR RING' },
  ];

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => console.log(`${item.name} clicked`)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2, // Adds shadow (Android)
    shadowColor: '#000', // Adds shadow (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default HomeScreen;
