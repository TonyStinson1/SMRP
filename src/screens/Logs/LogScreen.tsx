import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const LogScreen = () => {
  // Sample data for the log screen
  const data = [
    {
      id: '1',
      title: 'FITTINGS HDPE',
      subtitle: 'HDPE FLANGE 32MM',
      timestamp: '29/12/2024, 23:00:27 // 13',
      count: 4,
      status: 'success', // Green background
    },
    {
      id: '2',
      title: 'OIL SEALS',
      subtitle: '25X35X7',
      timestamp: '25/08/2024, 15:54:52 // 1',
      count: 4,
      status: 'error', // Red background
    },
    // Add more entries as needed
    {
      id: '3',
      title: 'OIL SEALS',
      subtitle: '25X35X7',
      timestamp: '25/08/2024, 15:54:52 // 1',
      count: 4,
      status: 'error',
    },
    {
      id: '4',
      title: 'OIL SEALS',
      subtitle: '25X35X7',
      timestamp: '25/08/2024, 15:54:36 // 5',
      count: 5,
      status: 'success',
    },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <View
      style={[
        styles.itemContainer,
        item.status === 'success' ? styles.successBackground : styles.errorBackground,
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        <Text style={styles.count}>{item.count}</Text>
      </View>
    </View>
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
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  successBackground: {
    backgroundColor: '#4CAF50', // Green
  },
  errorBackground: {
    backgroundColor: '#F44336', // Red
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  detailsContainer: {
    alignItems: 'flex-end',
  },
  timestamp: {
    fontSize: 12,
    color: '#fff',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
});

export default LogScreen;