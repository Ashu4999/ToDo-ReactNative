import { View, Text } from "react-native";

export default function EmptyListComp({ message }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{message}</Text>
        </View>
    );
};  