import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Left, Body, Right, Title, Content, Button, Icon, Text } from 'native-base';

export default function LogIn({ navigation }) {
  return (
    <Container  >
      <Header>
        <Left>
          <Button transparent onPress={() => { navigation.openDrawer() }}>
            <Icon name='menu' />
          </Button>
        </Left>

        <Body>
          <Title>LogIn</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.container} >
        <Text>Login Screen</Text>

      </Content>
    </Container>
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
