import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PostAuthNavigationParamList, PostAuthStackNavigationProps } from '../../navigation/types';

const HomeScreen = () => {
  // Sample data for the FlatList
  const data = [
    { id: '1', name: 'FITTINGS HDPE', nav: 'FittingsHDPE' },
    { id: '2', name: 'FITTINGS PPRC', nav: 'FittingsHDPE' },
    { id: '3', name: 'OIL SEALS', nav: 'FittingsHDPE' },
    { id: '4', name: 'PIPE HDPE', nav: 'FittingsHDPE' },
    { id: '5', name: 'PU SEAL', nav: 'FittingsHDPE' },
    { id: '6', name: 'WATER REFRACTOR RING', nav: 'FittingsHDPE' },
  ];

  const navigation = useNavigation<PostAuthStackNavigationProps['navigation']>();

  const renderItem = ({ item }: { item: { id: string; name: string, nav: string } }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate(item.nav)}>
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
