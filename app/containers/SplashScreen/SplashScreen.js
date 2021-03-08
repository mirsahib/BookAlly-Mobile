import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "native-base";
import colors from "../../assets/colors/colors";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/header_shape.png")}
          style={styles.header_shape}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/undraw_book_reading.png")}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.app_moto}>This is our app moto</Text>
        <Text style={styles.app_para} numberOfLines={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          neque orci suspendisse potenti amet, molestie enim. Et arcu volutpat
          eget ac vestibulum risus ullamcorper. Nunc lacinia justo.
        </Text>
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
          <Text style={styles.button_text}>Get Started</Text>
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: colors.background, flex: 1 },
  book_reading: {
    marginLeft: 27,
  },
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
  },
  button: {
    backgroundColor: colors.background_secondary,
    width: "95%",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
  button_text: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: colors.text_white,
    textAlign: "center",
  },
});
