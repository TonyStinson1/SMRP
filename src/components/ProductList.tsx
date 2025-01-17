// ProductList.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Product } from './interfaces';

interface Props {
    products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
    return (
        <View style={styles.container}>
            {products.map((product) => (
                <View key={product.id} style={styles.productContainer}>
                    <Text>{product.name}</Text>
                    <Text>{product.quantity}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginTop: 10 },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default ProductList;
