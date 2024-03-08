// import Box from './components/context/Box';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import User from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';
// import Counter from './components/state/Counter';
// import Button from './components/Button';
// import Container from './components/Container';
// import Greet from './components/Greet';
// import Heading from './components/Heading';
// import Input from './components/Input';
// import Oscar from './components/Oscar';
// import Person from './components/Person';
// import Status from './components/Status';

import Button from './components/html/Button';
import Input from './components/html/Input';
import Text from './components/polymorphic/Text';

function App() {
  return (
    <div>
      {/* <Person name={{ first: 'Rupesh', last: 'Garhwal' }}></Person> */}

      {/* <Heading>Hello World</Heading>
      <Oscar>
        <Heading>Oscar Goes to Mr. Rupesh</Heading>
      </Oscar> */}

      {/* <Greet name='Rupessh' isLoggedIn={true}></Greet> */}

      {/* <Button
        handleClick={(e, id) => {
          console.log('Button Clicked', e, id);
        }}
      ></Button> */}

      {/* <Input
        value='asdf'
        handleChange={(event) => {
          console.log(event);
        }}
      /> */}

      {/* <Container
        styles={{ border: '1px solid black', padding: '1rem', display: 'flex' }}
      ></Container> */}

      {/* <Counter></Counter> */}

      {/* <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User></User>
      </UserContextProvider> */}

      {/* <Button variant='primary' onClick={() => console.log('clicked')}>
        Primary Button
      </Button>

      <Input type='text'></Input> */}

      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' size='sm' color='secondary'>
        Label
      </Text>
    </div>
  );
}

export default App;
