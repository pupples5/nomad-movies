import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  handleError = (error) => console.log(error + "에러발생");

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    //throw new Error("im hungry");
    await Font.loadAsync({
      ...Ionicons.font,
    });

    // await this.loadAssets.loadAsync({
    //     require("")
    // });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <View style={styles.container}>
          <Text> Open</Text>
        </View>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        ></AppLoading>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
