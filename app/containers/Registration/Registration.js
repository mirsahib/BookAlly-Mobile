import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from "react-native";
import InputScrollView from "react-native-input-scroll-view";

import { Button } from "native-base";
import colors from "../../assets/colors/colors";

export default function Registration({ navigation }) {
  return (
    <InputScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/images/header_shape.png")}
          style={styles.header_shape}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.app_moto}>Welcome OnBoard</Text>
        <Text style={styles.app_para} numberOfLines={2}>
          Let’s manage your books and make some friends
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/** Add Text input */}
        <TextInput style={styles.input_field} placeholder="Enter your name" />
        <TextInput
          style={styles.input_field}
          placeholder="Enter email address"
        />
        <TextInput
          style={styles.input_field}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input_field}
          placeholder="Confirm password"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={styles.button}
          success
          full
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.button_text}>Register</Text>
        </Button>
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
    </InputScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background, flex: 1 },
  app_moto: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: colors.text_tertiary,
    textAlign: "center",
  },
  app_para: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "center",
    color: colors.text_secondary,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input_field: {
    height: 50,
    width: "90%",
    borderRadius: 100,
    backgroundColor: colors.text_white,
    color: colors.text_secondary,
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    paddingLeft: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: colors.background_secondary,
    width: "95%",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button_text: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: colors.text_white,
    textAlign: "center",
  },

  bottom_text: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
});
