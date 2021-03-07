import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Button,
  Icon,
} from "native-base";

export default function Registration({ navigation }) {
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Text style={styles.text}>Registration Screen</Text>
        <Button success full onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}> Register </Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
