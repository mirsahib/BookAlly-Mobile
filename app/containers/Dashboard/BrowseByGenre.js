import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

export default function BrowseByGenre({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Browse By Genre Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Back to Dashboard" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
