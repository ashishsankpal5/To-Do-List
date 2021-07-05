import ToDos from './ToDoList';
import { ChakraProvider } from '@chakra-ui/react';
const App = () => {
  return (
    <>
      <div className="my-application">
        <style>{'body { background-color: #dee3de; }'}</style>
        <ChakraProvider>
          <ToDos />
        </ChakraProvider>
      </div>
    </>
  );
};

export default App;
