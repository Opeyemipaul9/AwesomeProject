import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.subText}>Hi There</Text>
      <Button
        onPress={() => navigation.navigate('Search')}
        title = 'Search Screen'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  subText: {
    fontSize: 20
  }
});

export default HomeScreen;
