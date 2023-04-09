import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function EmptyListComp({ message }) {
    return (
        <View style={globalStyles.emptyListContainer}>
            <Text>{message}</Text>
        </View>
    );
};  