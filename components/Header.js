import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Header({product}) {

  return (
    <View style={styles.container}>
          <View style={styles.productContainer}>
              
          </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    marginTop: 5,
  },
});