import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Left, Body, Right, Title, Content, Button, Icon, Text } from 'native-base';

export default function BrowseByGenre({ navigation }) {
  return (
    <Container  >
      <Header>
        <Left>
          <Button transparent onPress={() => { navigation.goBack() }}>
            <Icon name='arrow-back'/>
          </Button>
        </Left>

        <Body>
          <Title> Genre Screen</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.container} >
        <Text>Genre Screen</Text>
        <Button success full onPress={() => navigation.goBack()}  >
          <Text style={styles.text}> Go to Dashboard Screen </Text>
        </Button>
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
