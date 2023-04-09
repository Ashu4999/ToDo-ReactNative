import React from "react";
import { StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Header() {
    return <Text style={globalStyles.headerText}>TO-DO List App</Text>;
};