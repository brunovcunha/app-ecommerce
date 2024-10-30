import React from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function Produtos() {

  const PRODUCTS = [
    {
      id: 100,
      name: "Aspirador de pó",
      price: 150,
      image: "https://www.eletrosom.com/media/catalog/product/cache/7170129d78510754741234b2b96ca1a2/a/c/acfavcas.png",
      description: "Aspirador de Pó Vertical e Portátil de Mão 2 em 1 WAP HIGH SPEED 1000W 1,2 litros Filtro HEPA 127V",
    },
    {
      id: 101,
      name: "Power Bank",
      price: 60.99,
      image: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1268013-Anker_325_Power_Bank_PowerCore_20K_5.png?v=1672389689",
      description: "Belkin BPB006BT USB-C 10000mAh Power Bank",
    },
    {
      id: 102,
      name: "Smartphone",
      price: 2000,
      image: "https://planoscelular.claro.com.br/medias/515Wx515H-productMain-18756-zero.png?context=bWFzdGVyfGltYWdlc3wyOTEzMzF8aW1hZ2UvcG5nfGFHSmxMMmd5WXk4NU56TXlNVEV4T1RJMU1qYzRMelV4TlZkNE5URTFTRjl3Y205a2RXTjBUV0ZwYmw4eE9EYzFObDk2WlhKdkxuQnVad3wxYmFjYmFjMTJmNjdiYWFmMmQzMjJhMjczNzFkMTEzY2FhZTIyNWMwZjIwYmU0MDc4OTVmNzAyNjdiZDRmN2Q1",
      description: "Smartphone Samsung Galaxy A32 128GB Violeta 4G - 4GB RAM Tela 6,4” Câm. Quádrupla + Selfie 20MP",
    },
  ];

  const handlePress = (product) => {
     
  };

  return (
    <ScrollView style={styles.container}>
      {PRODUCTS.map(product => (
        <TouchableOpacity key={product.id} onPress={() => handlePress(product)}>
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={{ uri: product.image }} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
});
