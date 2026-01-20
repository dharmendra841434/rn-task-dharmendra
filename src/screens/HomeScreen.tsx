import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import { PlaceholderItem } from '../types/types';
import CardSkeleton from '../components/CardSkeleton';

const HomeScreen: React.FC = () => {
  const [data, setData] = useState<PlaceholderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // ===== FETCH DATA =====
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        const json: PlaceholderItem[] = await res.json();

        setData(json.slice(0, 20)); // first 20 for demo
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: PlaceholderItem }) => (
    <View style={styles.card}>
      <Text style={styles.itemText}>{item.title}</Text>

      <Text style={styles.body} numberOfLines={2}>
        {item.body}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader title="Home" />

      <Text style={styles.welcome}>Welcome to the App 👋</Text>

      {loading ? (
        <View style={{ padding: 10 }}>
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <CardSkeleton key={i} />
          ))}
        </View>
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },

  welcome: {
    fontSize: 18,
    margin: 12,
    fontWeight: '600',
  },

  list: {
    padding: 10,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },

  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  body: {
    marginTop: 4,
    color: '#555',
  },

  error: {
    color: 'red',
    textAlign: 'center',
  },
});
