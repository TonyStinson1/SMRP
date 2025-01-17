import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { PostAuthStackNavigationProps } from '../../navigation/types';

const ProductListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigation = useNavigation<PostAuthStackNavigationProps['navigation']>();

  const productList = [
    { id: '1', name: 'hdpe stubend 20mm', quantity: 8 },
    { id: '2', name: 'hdpe stubend 32mm', quantity: 2 },
    { id: '3', name: 'hdpe stubend 40mm', quantity: 34 },
  ];

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f9f9f9',
        marginBottom: 5,
      }}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <Text>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10 }}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => openModal(item)}>
          <Ionicons name="information-circle" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Add Button */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>FITTINGS_HDPE</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('AddNewItemScreen')}
        >
          <Ionicons name="add" size={20} color="white" />
          <Text style={{ color: 'white', marginLeft: 5 }}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{selectedProduct?.name}</Text>
            <Text>Quantity: {selectedProduct?.quantity}</Text>
            <TouchableOpacity
              style={{
                marginTop: 20,
                padding: 10,
                backgroundColor: 'blue',
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={closeModal}
            >
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductListScreen;
