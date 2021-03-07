import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from "react-native";
import { Button } from "native-base";
import colors from "../../assets/colors/colors";

export default function Registration({ navigation }) {
  const [name, onChangeName] = useState("Enter Your Name");

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Image
        source={require("../../assets/images/header_shape.png")}
        style={styles.header_shape}
      />
      <SafeAreaView>
        <Text style={styles.app_moto}>Welcome Onboard !</Text>
        <Text style={styles.app_para} numberOfLines={2}>
          Let’s manage your books and make some friends
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={styles.input_field}
            onChangeName={(text) => onChangeName(text)}
            value={name}
          />
          <TextInput style={styles.input_field} />
          <TextInput style={styles.input_field} />
          <TextInput style={styles.input_field} />
          <View style={styles.button_container}>
            <Button
              style={styles.button}
              success
              full
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.button_text}> Register</Text>
            </Button>
            <View>
              <Text style={styles.bottom_text}>
                Already have an account ?{" "}
                <Text
                  style={{
                    color: colors.background_secondary,
                    fontFamily: "Poppins-Bold",
                  }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Sign in
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  app_moto: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: colors.text_tertiary,
    textAlign: "center",
    paddingTop: 10,
  },
  app_para: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "center",
    color: colors.text_secondary,
    paddingTop: 25,
    paddingBottom: 30,
  },
  input_field: {
    height: 50,
    width: "90%",
    borderRadius: 100,
    paddingLeft: 15,
    paddingTop: 15,
    marginLeft: 20,
    marginBottom: 35,
    backgroundColor: colors.text_white,
    color: colors.text_secondary,
    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.background_secondary,
    width: 364,
    height: 60,
  },
  button_text: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: colors.text_white,
  },
  button_container: {
    marginLeft: 15,
  },
  bottom_text: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
});
