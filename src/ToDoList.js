import { useState } from 'react';
import { Box, Heading, Flex, Input, Button } from '@chakra-ui/react';

import Items from './Items';

const ToDos = () => {
  const [inputList, SetInputList] = useState('');
  const [itemList, SetItemList] = useState([]);
  const itemEvent = (eve) => {
    SetInputList(eve.target.value);
  };
  const showItems = () => {
    SetItemList((recItems) => {
      return [...recItems, inputList];
    });
    SetInputList('');
  };
  const deleteHandler = () => {
    console.log('deleted');
  };

  return (
    <>
      <Flex direction="column" alignItems="center" mt="12" minW="400px">
        <Box
          className="main-box"
          // border="1px solid red"
          minH="500px"
          width="30%"
          borderRadius="3xl"
          bgColor="#f7fcfe"
          boxShadow="2xl"
          display="flex"
          flexDirection="column"
        >
          <Heading
            // border="1px solid red"
            mt="8"
            textAlign="center"
            color="#f8f8ff"
            bgColor="#b19cd9"
            p="2"
          >
            ToDo List
          </Heading>
          <Box
            // border="2px solid black"
            display="flex"
            justifyContent="center"
            mt="4"
          >
            <Box display="flex" width="70%">
              <Box>
                <Input
                  type="text"
                  value={inputList}
                  placeholder="Add a Item"
                  onChange={itemEvent}
                ></Input>
              </Box>
              <Button
                borderRadius="full"
                color="#f8f8ff"
                bgColor="#b19cd9"
                fontSize="large"
                ml="4"
                _hover={{ bgColor: 'green.600' }}
                onClick={showItems}
              >
                +
              </Button>
            </Box>
          </Box>
          <Box border="1px solid red" mt="10">
            {/* <li>{inputList}</li> */}
            {itemList.map((vals, index) => {
              return (
                <Items
                  key={index}
                  id={index}
                  text={vals}
                  onSelect={deleteHandler}
                />
              );
            })}
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default ToDos;
