import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Header() {
    return <Text style={styles.headerText}>TO-DO List App</Text>;
}

const styles = StyleSheet.create({
    headerText: {
        paddingVertical: 20,
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#fc7703",
    },
});
