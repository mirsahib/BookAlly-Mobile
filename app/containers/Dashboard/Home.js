import React from "react";
import {  StyleSheet, Text } from "react-native";
import { Container, Header, Left, Body, Right, Title, Content,Button,Icon } from 'native-base';

export default function Home({ navigation }) {
  return (
    <Container  >
        <Header>
          <Left>
              <Button transparent onPress={()=>{ navigation.openDrawer() }}>
                  <Icon name='menu' />
              </Button>
          </Left>
          
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.container} >
        <Text>Home Screen</Text>
          <Button success full onPress={() => navigation.navigate('BrowseByGenre')}  >
            <Text style={styles.text}> Go to Genre Screen </Text>
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
  text:{
    color:"white"
  }
});
