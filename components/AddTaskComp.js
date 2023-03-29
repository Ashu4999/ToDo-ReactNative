import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import InputDialog from "./InputDialog";

export default function AddTaskComp({ data, setData }) {
    const [dialogVisible, setDialogVisible] = useState(false);

    const addTask = (task) => {
        let maxIndexObj = data.reduce((max, obj) => max.id < obj.id ? obj : max, data[0]);
        let maxIndex = maxIndexObj ? parseInt(maxIndexObj.id) + 1 : 1;
        task.id = maxIndex;
        setData([...data, task]);
        setDialogVisible(false);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    return (
        <View style={{ position: "absolute", bottom: 15, right: 10 }}>
            <TouchableOpacity style={{
                backgroundColor: "#fc7703",
                padding: 5,
                borderRadius: 50
            }} onPress={() => { setDialogVisible(true) }}>
                <Icon name="plus" size={30} color={"#fff"} />
            </TouchableOpacity>
            <InputDialog
                visible={dialogVisible}
                onAdd={addTask}
                onClose={closeDialog}
            />
        </View>
    );
};

