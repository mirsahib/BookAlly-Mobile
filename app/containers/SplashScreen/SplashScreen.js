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

export default function SplashScreen({ navigation }) {
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Text>Splash Screen</Text>
        <Button
          success
          full
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.text}> Get Started </Text>
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
