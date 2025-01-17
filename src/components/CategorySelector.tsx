// CategorySelector.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from './interfaces';

interface Props {
    categories: Category[];
    selectedCategory: string;
    onSelectCategory: (categoryId: string) => void;
}

const CategorySelector: React.FC<Props> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <View style={styles.container}>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={styles.radioContainer}
                    onPress={() => onSelectCategory(category.id)}
                >
                    <Text style={styles.radioButton}>
                        {selectedCategory === category.id ? '●' : '○'}
                    </Text>
                    <Text>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginBottom: 10 },
    radioContainer: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 },
    radioButton: { marginRight: 5, fontSize: 16 },
});

export default CategorySelector;