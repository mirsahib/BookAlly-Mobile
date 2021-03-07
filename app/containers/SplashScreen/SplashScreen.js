import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import { Button } from "native-base";
import colors from "../../assets/colors/colors";

export default function SplashScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Image
        source={require("../../assets/images/header_shape.png")}
        style={styles.header_shape}
      />
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/undraw_book_reading.png")}
            style={styles.book_reading}
          />
          <Text style={styles.app_moto}>This is our app moto</Text>
          <Text style={styles.app_para} numberOfLines={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            neque orci suspendisse potenti amet, molestie enim. Et arcu volutpat
            eget ac vestibulum risus ullamcorper. Nunc lacinia justo.
          </Text>
          <View style={styles.button_container}>
            <Button
              style={styles.button}
              success
              full
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.button_text}> Get Started </Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  header_shape: {},
  book_reading: {
    marginLeft: 27,
  },
  app_moto: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: colors.text_tertiary,
    textAlign: "center",
    paddingTop: 30,
  },
  app_para: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "center",
    color: colors.text_secondary,
    paddingTop: 20,
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
    paddingTop: 50,
    marginLeft: 15,
  },
  text: {
    color: colors.text_white,
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
});
