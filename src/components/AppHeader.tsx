import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { AppHeaderProps } from '../types/types';

const { height: HEIGHT } = Dimensions.get('window');

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <Text style={styles.title}>{title || 'My First App'}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    height: HEIGHT * 0.12,
    justifyContent: 'flex-end',
    paddingBottom: '4%',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight || 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
