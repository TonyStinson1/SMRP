import React, { FC } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, TextInputProps } from 'react-native';

// Define props for the reusable input component
interface LabeledInputProps extends TextInputProps {
  label: string; // Label for the input field
  placeholder: string; // Placeholder text
  multiline?: boolean; // Whether the input is multiline
}

// Reusable labeled input component
const LabeledInput: FC<LabeledInputProps> = ({ label, placeholder, multiline = false, ...props }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      style={[styles.input, multiline && styles.multilineInput]}
      multiline={multiline}
      {...props} // Pass down additional TextInput props
    />
  </View>
);

const AddNewItemScreen: FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Item</Text>

      {/* Using reusable LabeledInput components */}
      <LabeledInput label="Size" placeholder="Enter size" />
      <LabeledInput label="Box" placeholder="Enter box details" />
      <LabeledInput label="Brand" placeholder="Enter brand name" />
      <LabeledInput label="Profile" placeholder="Enter profile details" />
      <LabeledInput label="Description" placeholder="Enter item description" multiline />
      <LabeledInput label="Price" placeholder="Enter price" keyboardType="numeric" />
      <LabeledInput label="Category" placeholder="Enter category" />
      <LabeledInput label="MOC" placeholder="Enter material of construction" />
      <LabeledInput label="Additional Description" placeholder="Enter additional details" multiline />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for better visibility
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#444',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  multilineInput: {
    height: 80, // Larger height for multiline inputs
  },
  addButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddNewItemScreen;
