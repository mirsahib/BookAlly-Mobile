import React from "react";
import { StyleSheet,View, Image,TouchableOpacity } from "react-native";
import { Container, Header, Left, Body, Right, Title, Content, Button, Icon, Text ,Label,Item, Input} from 'native-base';

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
      <View style={styles.container}>
        <Label style={styles.Label}> Welcome Back !</Label>
        <Image style={styles.img}
          source={require("../../assets/images/undraw_Login_re_4vu2.png")} />
        <View style={{ margin: 20, width: 300 }}>
          <Item rounded  >
            <Input
              style={{ color: '#0f0a3c' }}
              placeholder="Enter Your Email"
            />
          </Item>
          <Item rounded style={{ marginTop: 10 }}>
            <Input
              secureTextEntry={true}
              placeholder="Enter Your Password"
            />
          </Item>
          <Text gray caption center  style={styles.forgotPassword}>
             Forgot Password ?
            </Text>
        </View>
        <View style={styles.ButtonView}>
          <Button rounded style={styles.Button} >
            <Text style={styles.ButtonText}>Sign In</Text>
          </Button>
        </View>
        <TouchableOpacity style={{ paddingTop: 20 }} onPress={() =>navigation.navigate('Registration')} >
          <View style={{ flexDirection: 'row', }}>
            <Text gray caption center >
              Don't have an account ?
            </Text>
            <Text gray caption center style={styles.signup}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
        </View>     
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  signup:{ 
    textDecorationLine: 'underline',
    color: '#9F9CF2',
    fontWeight: 'bold' 
    },
  forgotPassword:{
    textAlign:"center",
    // marginTop:8,
     color:"#9F9CF2"
    },
  label: {
    width: 350,
    color: '#0f0a3c',
    fontFamily: 'Lora-Regular',
    fontSize: 18,
    fontWeight: '500',
  },
  ButtonView: {
  //  paddingTop: 10,
  },
  Button: {
    backgroundColor: '#9F9CF2',
    width: 280,
    marginRight: 5,
    marginLeft: 5,
  //  height: 55,
  borderRadius:0,
   justifyContent:"center"
  },
  ButtonText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Lora-Bold',
  },
  input: {
    width: 320,
    height: 50,
    margin: 10,
    padding: 8,
    color: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lora-Regular',
    backgroundColor: '#E5E5E5'
  },
  img: {
    paddingBottom: 5,
    alignItems: 'center',
    height: 170,
    width: 200,

  },
  Label: {
    width: 350,
    color: '#413BDB',
    fontFamily: 'Lora-Regular',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'

  }
});
