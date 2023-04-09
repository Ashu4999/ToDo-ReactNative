import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { DataContext } from "../App";
import InputDialog from "./InputDialog";
import { globalStyles } from "../styles/global";

export default function TodoItem({ item, makeCompleteOrInComplete, removeTask }) {
    const { id, title, description, completed } = item;
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const dataContext = useContext(DataContext);
    const { data, setData } = dataContext;

    const handleUpdateTask = (task) => {
        let tempData = data;
        let taskObjToUpdate = tempData.find(item => item.id == task.id);
        taskObjToUpdate.title = task.title;
        taskObjToUpdate.description = task.description;
        setData(tempData);
        setDialogVisible(false);
    };

    const handleClose = () => {
        setDialogVisible(false);
    };

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'Are you sure you want to delete this task?', [
            { text: 'Cancel', style: 'cancel', },
            { text: 'OK', onPress: () => removeTask(id) },
        ]);

    return (
        <View style={globalStyles.taskItem}>
            <View style={{ maxWidth: "70%" }}>
                <Text style={[globalStyles.title, { textDecorationLine: completed ? "line-through" : "none" },]}>
                    {title}
                </Text>
                <Text style={[globalStyles.subtitle, { textDecorationLine: completed ? "line-through" : "none" },]}>
                    {description}
                </Text>
            </View>
            <View>
                {completed ?
                    <View style={globalStyles.buttonContainer}>
                        <TouchableOpacity onPress={() => { createTwoButtonAlert(id) }}>
                            <Icon name="delete" size={30} color={"red"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { makeCompleteOrInComplete(id, "edit"); }}>
                            <Icon name="close" size={30} color={"red"} />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={globalStyles.buttonContainer}>
                        <TouchableOpacity onPress={() => { setSelectedID(id); setDialogVisible(true); }}>
                            <Icon name="edit" size={30} color={"blue"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { makeCompleteOrInComplete(id, "complete"); }}>
                            <Icon name="check" size={30} color={"green"} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
            {selectedID && <InputDialog
                visible={dialogVisible}
                selectedID={selectedID}
                onAdd={handleUpdateTask}
                onClose={handleClose}
            />}
        </View>
    );
}
