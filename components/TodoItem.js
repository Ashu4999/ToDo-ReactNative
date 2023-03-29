import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { DataContext } from "../App";
import EditTaskDialog from "./EditTaskDialog";

export default function TodoItem({ item, makeCompleteOrInComplete, removeTask }) {
    const { id, title, description, completed } = item;
    const [dialogVisible, setDialogVisible] = useState(false);
    const dataContext = useContext(DataContext);

    const handleAdd = (task) => {
        let maxIndexObj = data.reduce((max, obj) => max.id < obj.id ? obj : max, data[0]);
        let maxIndex = maxIndexObj ? parseInt(maxIndexObj.id) + 1 : 1;
        task.id = maxIndex;
        setData([...data, task]);
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
                        <TouchableOpacity onPress={() => { setDialogVisible(true); }}>
                            <Icon name="edit" size={30} color={"blue"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { makeCompleteOrInComplete(id, "complete"); }}>
                            <Icon name="check" size={30} color={"green"} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <EditTaskDialog
                visible={dialogVisible}
                onAdd={handleAdd}
                onClose={handleClose}
            />
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
