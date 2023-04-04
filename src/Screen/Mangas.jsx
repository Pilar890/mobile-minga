import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import MangasTitle from '../Components/MangasTitle';
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import MangasType from '../Components/MangasType';
import MangasCards from '../Components/MangasCards';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Mangas() {

  return (
    <ScrollView style={styles.mangas}>
      <MangasTitle />
      <ScrollView style={styles.mangasDisplayed}>
        <Text style={{ marginBottom: 12, fontWeight: 'bold', color: 'white' }}>Read</Text>
        <MangasType />
        <MangasCards />
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mangas: {
    height: "100%",
  },
  mangasDisplayed: {
    display: "flex",
    padding: 10,
    width: "100%",
    minHeight: windowHeight,
    backgroundColor: "white",
  },
});

export default Mangas