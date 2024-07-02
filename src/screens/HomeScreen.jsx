/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { fonts } from './assets/fonts/themes';

const API_KEY = 'f71af7261c434b5d8be60816ed910d8b';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={styles.articleContainer}
      onPress={() => navigation.navigate('Article', { article: item })}
    >
      {index === 0 ? (
        <Image source={{ uri: item.urlToImage }} style={styles.fullWidthImage} />
      ) : (
        <Image source={{ uri: item.urlToImage }} style={styles.squareImage} />
      )}
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    marginBottom: 20,
  },
  fullWidthImage: {
    width: '100%',
    height: 200,
  },
  squareImage: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.libreFranklin.bold,
    marginVertical: 10,
  },
});

export default HomeScreen;
