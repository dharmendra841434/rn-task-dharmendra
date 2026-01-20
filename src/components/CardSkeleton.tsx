import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const CardSkeleton: React.FC = () => {
  const opacity = new Animated.Value(0.3);

  Animated.loop(
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0.3,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={styles.title} />
      <View style={styles.line} />
      <View style={styles.lineSmall} />
    </Animated.View>
  );
};

export default CardSkeleton;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },

  title: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    width: '70%',
    marginBottom: 8,
  },

  line: {
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    width: '90%',
    marginBottom: 6,
  },

  lineSmall: {
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    width: '60%',
  },
});
