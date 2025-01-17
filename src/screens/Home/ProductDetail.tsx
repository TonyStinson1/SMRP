import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProductDetail = ({ route }: any) => {
    const { productId } = route.params; // Get productId from navigation params

    const [productDetails, setProductDetails] = useState<any>(null);
    const [transactionHistory, setTransactionHistory] = useState<any[]>([]); // List of transactions
    const [currentQuantity, setCurrentQuantity] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    // Simulated data for demonstration
    const productData = [
        { id: '1', name: 'hdpe stubend 20mm', description: 'Stubend 20mm HDPE pipe fitting', price: 10, quantity: 80 },
        { id: '2', name: 'hdpe stubend 32mm', description: 'Stubend 32mm HDPE pipe fitting', price: 20, quantity: 40 },
        { id: '3', name: 'hdpe stubend 40mm', description: 'Stubend 40mm HDPE pipe fitting', price: 30, quantity: 34 },
    ];

    useEffect(() => {
        // Simulating API call delay
        setTimeout(() => {
            const product = productData.find((item) => item.id === productId);
            if (product) {
                setProductDetails(product);
                initializeTransactions(product.quantity); // Initialize transaction history
            }
            setLoading(false);
        }, 1000); // Simulated loading delay
    }, [productId]);

    const initializeTransactions = (initialQuantity: number) => {
        const now = new Date();

        const sampleTransactions = [
            { type: 'add', amount: initialQuantity, timestamp: now.toLocaleString('en-GB') }, // Initial inventory
            { type: 'deduct', amount: 10, timestamp: new Date(now.getTime() - 600000).toLocaleString('en-GB') }, // Deduction 10 mins ago
            { type: 'deduct', amount: 5, timestamp: new Date(now.getTime() - 300000).toLocaleString('en-GB') }, // Deduction 5 mins ago
        ];

        const finalQuantity = sampleTransactions.reduce((acc, item) => {
            return item.type === 'add' ? acc + item.amount : acc - item.amount;
        }, 0);

        setTransactionHistory(sampleTransactions);
        setCurrentQuantity(finalQuantity); // Set calculated quantity
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <Text>Loading product details...</Text>
            </View>
        );
    }

    if (!productDetails) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>Product not found!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.currentQuantity}>
                Current Quantity: {currentQuantity}
            </Text>

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{productDetails.name}</Text>
                <Text style={styles.description}>{productDetails.description}</Text>
                <Text style={styles.detailText}>
                    <Text style={styles.bold}>Price:</Text> ${productDetails.price}
                </Text>
            </View>

            <Text style={styles.logTitle}>Transaction History:</Text>
            <ScrollView style={styles.transactionContainer}>
                {transactionHistory.map((entry, index) => (
                    <View
                        key={index}
                        style={[
                            styles.transaction,
                            entry.type === 'add' ? styles.addTransaction : styles.deductTransaction,
                        ]}
                    >
                        <Text style={styles.transactionText}>
                            {entry.type === 'add' ? 'Added' : 'Deducted'} {entry.amount} item(s)
                        </Text>
                        <Text style={styles.transactionTimestamp}>{entry.timestamp}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    currentQuantity: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    detailsContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    detailText: {
        fontSize: 18,
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    logTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    transactionContainer: {
        flex: 1,
        backgroundColor: '#eaeaea',
        padding: 10,
        borderRadius: 5,
    },
    transaction: {
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    addTransaction: {
        backgroundColor: '#d4fdd4', // Light green for additions
    },
    deductTransaction: {
        backgroundColor: '#fdd4d4', // Light red for deductions
    },
    transactionText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    transactionTimestamp: {
        fontSize: 14,
        color: '#555',
    },
});

export default ProductDetail;