import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: { flex: 1, gap: 10 },
    taskContainer: {
        marginHorizontal: 30,
        justifyContent: "center",
    },
    flatListStyle: { flexGrow: 1, justifyContent: 'center' },
    headerText: {
        paddingVertical: 20,
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#fc7703",
    },
    emptyListContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    addTaskContainer: { position: "absolute", bottom: 15, right: 10 },
    addTaskBtn: {
        backgroundColor: "#fc7703",
        padding: 5,
        borderRadius: 50
    },
    inputModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10
    },
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
