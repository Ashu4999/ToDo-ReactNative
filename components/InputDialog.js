import { View, Text, TextInput, Modal, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../App";
import { globalStyles } from "../styles/global";

export default function EditTaskDialog(props) {
    const { selectedID } = props;
    const [task, setTask] = useState({ id: "", title: "", description: "", completed: false });
    const [customError, setCustomError] = useState("");
    const dataContext = useContext(DataContext);
    const { data, setData } = dataContext;

    useEffect(() => {
        if (selectedID) {
            let selectedData = data.find(item => item.id == selectedID);
            setTask(selectedData);
        }
    }, [selectedID]);

    const handleAddOrUpdate = () => {
        if (!task.title || !task.description) {
            setCustomError("Please fill all details");
            return;
        }
        props.onAdd(task);
        setTask({ id: "", title: "", description: "", completed: false });
        setCustomError("");
    };

    function setValuesOfTask(whichValue, value) {
        setTask(prevState => { return { ...prevState, [whichValue]: value } })
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={globalStyles.inputModalContainer}>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={(value) => { setValuesOfTask("title", value) }}
                    value={task.title}
                    placeholder={"Title"}
                />
                <TextInput
                    style={globalStyles.input}
                    onChangeText={(value) => { setValuesOfTask("description", value) }}
                    value={task.description}
                    placeholder={"description"}
                />
                {customError.length > 0 && <Text style={{ color: "red" }}>{`*${customError}`}</Text>}
                <View style={globalStyles.buttonContainer}>
                    <Button title="Cancel" onPress={props.onClose} />
                    <Button title={selectedID ? "Update" : "Add"} onPress={handleAddOrUpdate} />
                </View>
            </View>
        </Modal>
    );
};
