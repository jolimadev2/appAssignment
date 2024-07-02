/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, ScollView, Image, StyleSheet} from 'react-native';
import { fonts } from './assets/fonts/themes';



const ArticleScreen = ({route}) => {
  const {article} = route.params;

  return (
    <ScollView contentContainerStyle={styles.container}>
      <Image source={{uri: article.urlToImage}} style={styles.image} />
      <Text style={styles.title}>{article.title} </Text>
      <Text style={styles.content}>{article.content} </Text>
    </ScollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.libreFranklin.bold,
        marginVertical: 10,
  },
  content: {
    fontSize: 16,
    fontFamily: fonts.merriweather.regular,
    marginTop:10,
  },
});

export default ArticleScreen;
