import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { DataContext } from "../App";
import InputDialog from "./InputDialog";

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

    return (
        <View style={styles.taskItem}>
            <View style={{ maxWidth: "70%" }}>
                <Text style={[styles.title, { textDecorationLine: completed ? "line-through" : "none" },]}>
                    {title}
                </Text>
                <Text style={[styles.subtitle, { textDecorationLine: completed ? "line-through" : "none" },]}>
                    {description}
                </Text>
            </View>
            <View>
                {completed ?
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => { removeTask(id); }}>
                            <Icon name="delete" size={30} color={"red"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { makeCompleteOrInComplete(id, "edit"); }}>
                            <Icon name="close" size={30} color={"red"} />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
    taskItem: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        gap: 20,
        wordWrap: "break-word"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        fontSize: 15,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 15
    }
});
