import { Icon } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import './style.css';
const Items = ({ text }) => {
  //   const delet = () => {
  //     console.log('delete');
  //   };
  return (
    <>
      <li>
        <Icon
          as={ImCross}
          mr="6"
          _hover={{ color: 'white', bgColor: 'red' }}
          borderRadius="full"
          color="#b19cd9"
          onClick={text.onSelect}
        />
        {text}
      </li>
    </>
  );
};
export default Items;
