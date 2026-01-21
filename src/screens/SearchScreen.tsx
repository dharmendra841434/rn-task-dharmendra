import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SearchItems } from '../constants/data';
import AppHeader from '../components/AppHeader';
import { SearchItem } from '../types/types';

// tiny debounce
const useMiniDebounce = (value: string, delay = 400) => {
  const [dValue, setDValue] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => setDValue(value), delay);
    return () => clearTimeout(t);
  }, [value]);

  return dValue;
};

const { height: HEIGHT } = Dimensions.get('window');

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const debouncedQuery = useMiniDebounce(query);

  // Better filter: title + category + desc
  const filteredData = SearchItems.filter(item =>
    `${item.title} ${item.category} ${item.desc}`
      .toLowerCase()
      .includes(debouncedQuery.toLowerCase()),
  );

  const renderItem = ({ item }: { item: SearchItem }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>

      <Text style={styles.category}>{item.category}</Text>

      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <AppHeader title="Search Here" />

        <View style={styles.content}>
          <Text style={styles.title}>Search Items</Text>

          <TextInput
            style={styles.input}
            placeholder="Search by title, category..."
            value={query}
            onChangeText={setQuery}
          />

          {filteredData.length > 0 ? (
            <FlatList
              data={filteredData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              style={{ flex: 1 }}
              keyboardShouldPersistTaps="handled" // important
            />
          ) : (
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No results found 😔</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  content: {
    flex: 1,
    padding: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },

  card: {
    padding: 14,
    backgroundColor: '#fff',
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },

  empty: {
    marginTop: 40,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  category: {
    color: '#2c3e50',
    marginTop: 4,
    fontSize: 12,
  },

  desc: {
    marginTop: 4,
    color: '#555',
  },
});
