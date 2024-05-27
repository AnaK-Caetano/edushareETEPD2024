import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const cardWidth = (380 / 418) * width;

const Card = ({ user, text, tituloProjeto }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: user.foto }}
        style={styles.cardFoto}
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <View style={styles.cardContent}>
          <Text style={styles.cardTituloProjeto}><strong>{tituloProjeto}</strong></Text>
          <Text style={styles.cardUsername}>{user.name}</Text>
          <Text style={styles.cardText}>{text}</Text>
        </View>
      )}
      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>Tecnologias Utilizadas:</Text>
      </View>
    </View>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired
  }).isRequired,
  tituloProjeto: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    overflow: 'hidden'
  },
  cardFoto: {
    width: '100%',
    height: 200
  },
  cardContent: {
    padding: 10
  },
  cardTituloProjeto: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardUsername: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333'
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
    marginTop: 5
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    padding: 10,
    backgroundColor: '#F8F8F8'
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#333'
  }
});

export default Card;