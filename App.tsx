import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

type MenuItem = {
  dishName: string;
  course: string;
  description: string;
  price: string;
};

const App = () => {
  const [dishName, setDishName] = useState('');
  const [course, setCourse] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = () => {
    const newItem: MenuItem = { dishName, course, description, price };
    setMenuItems([...menuItems, newItem]);
    setDishName('');
    setCourse('');
    setDescription('');
    setPrice('');
  };

  return (
    <View style={styles.entirePage}>
      <Text style={styles.header}>Adding Of Menus</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Dish Name"
        value={dishName}
        onChangeText={setDishName} />

      <TextInput
        style={styles.input}
        placeholder="Enter Course"
        value={course}
        onChangeText={setCourse} />

      <TextInput
        style={styles.input}
        placeholder=" Enter Description"
        value={description}
        onChangeText={setDescription} />

      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric" />

      <TouchableOpacity style={styles.button} onPress={addMenuItem}>
        <Text style={styles.buttonTexts}>ADD MENU TO HOMEPAGE</Text>
      </TouchableOpacity>

      <Text style={styles.available}>Dishes Available: {menuItems.length}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  entirePage: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },

  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: '#343a40',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonTexts: {
    color: 'white',
    fontWeight: 'bold',
  },

  available: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    color: '#343a40',
  },

  menuItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#b0e0e6',
    borderRadius: 5,
    shadowColor: '#3A416F#141727',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default App;