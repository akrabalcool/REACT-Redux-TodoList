import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";
import { TodoList } from "./component/todoList";
import { store } from "./redux/store";

function App() {
    
 
    
  return (
    <Provider store={store} >
       <ChakraProvider>
            <TodoList/>
       </ChakraProvider>
    </Provider>
     
  );
}

export default App;
