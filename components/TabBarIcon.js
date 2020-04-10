import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/color";

const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    size={32}
    name={name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  ></Ionicons>
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};
export default TabBarIcon;
