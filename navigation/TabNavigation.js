import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MovieScreen from "../screens/Movies";
import TvScreen from "../screens/TV";
import Search from "../screens/Search";
import { BG_COLOR } from "../constants/color";

const TabNavigation = createBottomTabNavigator(
  {
    Movie: MovieScreen,
    TV: TvScreen,
    Search: Search,
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR,
      },
    },
  }
);

export default createAppContainer(TabNavigation);
