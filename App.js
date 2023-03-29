import { useState, createContext } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AddTaskComp from "./components/AddTaskComp";
import EmptyListComp from "./components/EmptyListComp";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

const DataContext = createContext();

export default function App() {
  const [data, setData] = useState([]);

  function makeCompleteOrInComplete(id, whichOperation) {
    let tempArray = data;
    let objectToUpdate = tempArray.find((item) => item.id == id);
    objectToUpdate.completed = whichOperation.toLowerCase() == "complete" ? true : false;
    setData([...tempArray]);
  }

  function editTask(id) {
    let tempArray = data;
    let objectToUpdate = tempArray.find((item) => item.id == id);
    objectToUpdate.title = "";
    objectToUpdate.subtile = "";
    setData([...tempArray]);
  }

  function removeTask(id) {
    setData(prevData => prevData.filter((item) => item.id != id));
  }

  return (
    <DataContext.Provider value={{ data, setData }} >
      <View style={{ height: "100%" }}>
        <Header />
        <View style={styles.taskContainer}>
          <FlatList
            keyExtractor={(item) => item?.id}
            data={data}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                makeCompleteOrInComplete={makeCompleteOrInComplete}
                removeTask={removeTask} />
            )}
            ListEmptyComponent={<EmptyListComp message={"No task added"} />}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          />
        </View>
        <AddTaskComp data={data} setData={setData} />
      </View>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    margin: 30,
    justifyContent: "center",
  },
});

export { DataContext };