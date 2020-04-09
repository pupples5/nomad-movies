import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigator from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
      navigationOptions: { header: null },
      DetailScreen,
    },
  },
  {
    //initialRouteName : "DetailScreen"
  }
);

export default createAppContainer(MainNavigation);
